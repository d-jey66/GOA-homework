const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  mobile: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  avatar: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    maxlength: 500
  },
  socialMedia: {
    facebook: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    },
    linkedin: {
      type: String,
      default: ''
    }
  },
  platformSettings: {
    emailOnFollow: {
      type: Boolean,
      default: true
    },
    emailOnPostAnswer: {
      type: Boolean,
      default: true
    },
    emailOnMention: {
      type: Boolean,
      default: false
    },
    newLaunches: {
      type: Boolean,
      default: false
    },
    monthlyUpdates: {
      type: Boolean,
      default: false
    },
    newsletter: {
      type: Boolean,
      default: true
    }
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for faster queries
userSchema.index({ email: 1 });
userSchema.index({ fullName: 'text' });

module.exports = mongoose.model('User', userSchema);