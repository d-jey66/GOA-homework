//user card info

import mongoose from 'mongoose';
const { Schema } = mongoose;

const userCardInformationSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  card: [
    {
      fakeCardId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Card'
      }
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('UserCardInformation', userCardInformationSchema);
