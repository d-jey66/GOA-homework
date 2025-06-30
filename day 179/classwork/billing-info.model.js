//billing

import mongoose from 'mongoose';
const { Schema } = mongoose;

const billingInfoSchema = new Schema({
  companyUserId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' 
  },
  companyName: {
    type: String,
    required: true
  },
  companyEmailAddress: {
    type: String,
    required: true
  },
  vatNumber: {
    type: String,
    required: true
  }
});

const userBillingSchema = new Schema({
  billingInfo: [billingInfoSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('UserBilling', userBillingSchema);
