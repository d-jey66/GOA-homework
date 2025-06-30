//invoice

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  invoice_id: {
    type: mongoose.Types.ObjectId, 
    required: true,
    ref: 'Invoice'
  },
  price: {
    type: Schema.Types.Mixed,
    validate: {
      validator: function (v) {
        return typeof v === 'number' || v === 'peanding';
      },
      message: props => `${props.value} is not a valid price value!`
    },
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
