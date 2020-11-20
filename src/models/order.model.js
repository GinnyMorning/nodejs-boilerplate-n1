const mongoose = require('mongoose');
const orderStatus = require('../config/orderStatus');
const { toJSON } = require('./plugins');

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      // required: true,
    },
    // orderId: {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   require: true,
    //   trim: true,
    //   index: true,
    // },
    productIds: {
      type: String,
      require: true,
    },
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

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
