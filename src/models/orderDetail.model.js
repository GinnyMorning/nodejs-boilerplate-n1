const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const orderDetailSchema = mongoose.Schema(
  {
    orderId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Order',
      required: true,
    },
    product: [],
    total: {
      type: Number,
      require: true,
    },
    payment: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
orderDetailSchema.plugin(toJSON);
orderDetailSchema.plugin(paginate);

/**
 * @typedef OrderDetail
 */
const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

module.exports = OrderDetail;
