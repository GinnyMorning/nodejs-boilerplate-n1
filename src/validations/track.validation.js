const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createOrderValidate = {
  body: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
    name: Joi.string(),
    locations: Joi.object().keys({
      timestamp: Joi.number(),
      coords: Joi.object().keys({
        latitude: Joi.number(),
        longitude: Joi.number(),
        altitude: Joi.number(),
        accuracy: Joi.number(),
        heading: Joi.number(),
        speed: Joi.number(),
      }),
    }),
  }),
};
const getTracksValidate = {
  params: Joi.object.keys({
    userId: Joi.string().custom(objectId).required(),
  }),
};

const getTrackByIdValidate = {
  body: Joi.object.keys({
    trackId: Joi.string().custom(objectId).required(),
  }),
};

const deleteTrackValidation = {
  body: Joi.object.keys({
    trackId: Joi.string().custom(objectId).required(),
  }),
};
module.exports = {
  createOrderValidate,
  getTrackByIdValidate,
  getTracksValidate,
  deleteTrackValidation,
};
