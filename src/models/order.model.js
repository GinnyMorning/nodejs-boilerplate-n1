const mongoose = require('mongoose');
const orderStatus = require('../config/orderStatus');
const { toJSON, paginate } = require('./plugins');

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    productIds: {
      type: String,
      require: true,
    },
    shippingDetails: {},
    orderStatus: {
      type: String,
      enum: [orderStatus.NEW, orderStatus.ACCEPTED, orderStatus.PROCCESSING, orderStatus.COMPLEDTED, orderStatus.CANCEL],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);
orderSchema.plugin(paginate);

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
