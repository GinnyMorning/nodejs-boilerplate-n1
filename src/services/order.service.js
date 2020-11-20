const httpStatus = require('http-status');
const { Order } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a order
 * @param {Object} updateBody
 * @returns {Promise<Order>}
 */
const createOrder = async (updateBody) => {
  //   if (await Order.isEmailTaken(orderBody.userId)) {
  //     throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  //   }
  const order = await Order.create({
    updateBody,
  });
  return order;
};

/**
 * Get order by id
 * @param {ObjectId} id
 * @returns {Promise<Order>}
 */
const getOrderById = async (id) => {
  return Order.findById(id);
};

/**
 * Update user by id
 * @param {ObjectId} orderId
 * @param {Object} updateBody
 * @returns {Promise<Order>}
 */
const updateOrderById = async (orderId, updateBody) => {
  const order = await getOrderById(orderId);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
  if (!updateBody.productIds) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Order must have at least 1 prodyct');
  }
  Object.assign(order, updateBody);
  await order.save();
  return order;
};

/**
 * Delete user by id
 * @param {ObjectId} orderId
 * @returns {Promise<Order>}
 */
const deleteOrderById = async (orderId) => {
  const order = await getOrderById(orderId);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
  await order.remove();
  return order;
};

module.exports = {
  createOrder,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
