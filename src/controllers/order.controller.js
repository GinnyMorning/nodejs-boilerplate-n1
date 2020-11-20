const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { orderService } = require('../services');

const createOrder = catchAsync(async (req, res) => {
  const order = await orderService.createOrder(req.body);
  res.status(httpStatus.CREATED).send(order);
});

const getOrder = catchAsync(async (req, res) => {
  const order = await orderService.getOrderById(req.body.orderId);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No order found');
  }
  res.send(order);
});

const updateOder = catchAsync(async (req, res) => {
  const order = await orderService.updateOrderById(req.params.orderId, req.body);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order ID not found');
  }
  res.send(order);
});

const deleteOrder = catchAsync(async (req, res) => {
  const order = await orderService.deleteOrderById(req.params.orderId);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order ID not found');
  }
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createOrder,
  getOrder,
  updateOder,
  deleteOrder,
};
