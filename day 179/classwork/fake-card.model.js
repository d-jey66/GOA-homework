//fake-card

import mongoose from 'mongoose';
const { Schema } = mongoose;

const fakeCardSchema = new Schema({
  serialNumber: {
    type: String,
    required: true
  },
  cardholderName: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  expirationDate: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: false
  },
  paypal: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('FakeCard', fakeCardSchema);
