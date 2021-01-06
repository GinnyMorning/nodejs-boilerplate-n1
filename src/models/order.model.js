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
    shippingDetails: {
      address: { type: String, require: true },
      phone: { type: String, require: true },
    },
    orderStatus: {
      type: String,
      enum: [orderStatus.NEW, orderStatus.ACCEPTED, orderStatus.PROCCESSING, orderStatus.COMPLEDTED, orderStatus.CANCEL],
      require: true,
    },
    comment: {
      type: String,
      require: false,
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
