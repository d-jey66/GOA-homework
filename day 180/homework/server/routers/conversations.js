const express = require('express');
const Conversation = require('../models/Conversation');
const router = express.Router();

// GET /api/conversations - Get all conversations for a user
router.get('/', async (req, res) => {
  try {
    const { userId, page = 1, limit = 10, type } = req.query;
    
    if (!userId) {
      return res.status(400).json({ 
        success: false, 
        message: 'userId is required' 
      });
    }

    const query = { 
      participants: userId,
      isActive: true 
    };
    
    if (type) query.conversationType = type;

    const conversations = await Conversation.find(query)
      .populate('participants', 'fullName email avatar')
      .populate('lastMessage.sender', 'fullName avatar')
      .select('-messages') // Don't include full message history
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ 'lastMessage.timestamp': -1 });

    const total = await Conversation.countDocuments(query);

    res.json({
      success: true,
      data: conversations,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/conversations/:id - Get conversation by ID with messages
router.get('/:id', async (req, res) => {
  try {
    const { page = 1, limit = 50 } = req.query;
    
    const conversation = await Conversation.findById(req.params.id)
      .populate('participants', 'fullName email avatar')
      .populate('messages.sender', 'fullName avatar')
      .populate('lastMessage.sender', 'fullName avatar');
    
    if (!conversation) {
      return res.status(404).json({ 
        success: false, 
        message: 'Conversation not found' 
      });
    }

    // Paginate messages
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedMessages = conversation.messages
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(startIndex, endIndex);

    const conversationData = {
      ...conversation.toObject(),
      messages: paginatedMessages,
      messagePagination: {
        current: page,
        pages: Math.ceil(conversation.messages.length / limit),
        total: conversation.messages.length
      }
    };

    res.json({ success: true, data: conversationData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/conversations - Create new conversation
router.post('/', async (req, res) => {
  try {
    const { participants, title, conversationType = 'direct' } = req.body;
    
    if (!participants || participants.length < 2) {
      return res.status(400).json({ 
        success: false, 
        message: 'At least 2 participants are required' 
      });
    }

    // Check if direct conversation already exists between these users
    if (conversationType === 'direct' && participants.length === 2) {
      const existingConv = await Conversation.findOne({
        participants: { $all: participants, $size: 2 },
        conversationType: 'direct'
      });
      
      if (existingConv) {
        return res.status(400).json({ 
          success: false, 
          message: 'Conversation already exists between these users' 
        });
      }
    }

    const conversation = new Conversation({
      participants,
      title,
      conversationType
    });

    await conversation.save();
    
    const populatedConversation = await Conversation.findById(conversation._id)
      .populate('participants', 'fullName email avatar');
    
    res.status(201).json({ success: true, data: populatedConversation });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// POST /api/conversations/:id/messages - Add message to conversation
router.post('/:id/messages', async (req, res) => {
  try {
    const { content, sender, messageType = 'text', attachments = [] } = req.body;
    
    if (!content || !sender) {
      return res.status(400).json({ 
        success: false, 
        message: 'Content and sender are required' 
      });
    }

    const conversation = await Conversation.findById(req.params.id);
    if (!conversation) {
      return res.status(404).json({ 
        success: false, 
        message: 'Conversation not found' 
      });
    }

    // Check if sender is a participant
    if (!conversation.participants.includes(sender)) {
      return res.status(403).json({ 
        success: false, 
        message: 'Sender is not a participant in this conversation' 
      });
    }

    const newMessage = {
      content,
      sender,
      messageType,
      attachments,
      timestamp: new Date()
    };

    conversation.messages.push(newMessage);
    conversation.lastMessage = {
      content,
      sender,
      timestamp: new Date()
    };

    await conversation.save();
    
    const updatedConversation = await Conversation.findById(req.params.id)
      .populate('lastMessage.sender', 'fullName avatar')
      .populate('messages.sender', 'fullName avatar');
    
    res.json({ 
      success: true,
      message: 'Message added successfully',
      data: {
        conversationId: updatedConversation._id,
        lastMessage: updatedConversation.lastMessage,
        messages: updatedConversation.messages.slice(-1), // Only return the newly added message
      }
    });
    
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
