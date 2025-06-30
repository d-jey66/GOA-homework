//your transactions

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const YourModelSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  company_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Company'
  },
  company_name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  },
  price: {
    type: mongoose.Schema.Types.Mixed,
    validate: {
      validator: function (v) {
        return typeof v === 'number' || v === 'peading';
      },
      message: props => `${props.value} is not a valid price!`
    },
    required: true
  }
});

module.exports = mongoose.model('YourModel', YourModelSchema);
