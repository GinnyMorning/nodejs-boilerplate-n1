const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createOrder = {
  body: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    productIds: Joi.string(),
    orderStatus: Joi.string().valid('new'),
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
    productIds: Joi.string(),
    orderStatus: Joi.string(),
    dateCreate: Joi.date(),
  }),
};

const deleteOrder = {
  params: Joi.object().keys({
    orderId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createOrder,
  getOrderById,
  updateOrderById,
  deleteOrder,
};
