const Joi = require('joi');
const { objectId } = require('./custom.validation');
const { status } = require('../config/orderStatus');

const createOrder = {
  body: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
    productIds: Joi.string(),
    orderStatus: Joi.string().valid('new'),
  }),
};

const getOrders = {
  query: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    productIds: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};
const getOrderById = {
  params: Joi.object().keys({
    orderId: Joi.string().custom(objectId),
  }),
};

const updateOrderById = {
  params: Joi.object().keys({
    orderId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    productIds: Joi.string().required(),
    orderStatus: Joi.string().valid(...status),
  }),
};

const deleteOrder = {
  params: Joi.object().keys({
    orderId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderById,
  deleteOrder,
};
