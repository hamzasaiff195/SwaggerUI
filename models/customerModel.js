const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A customer must have name'],
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
