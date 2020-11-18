const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const orderSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true,
    trim: true,
  },
  orderId: {
    type: Number,
    require: true,
    trim: true,
  },
});

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
