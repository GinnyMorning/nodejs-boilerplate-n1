const httpStatus = require('http-status');
const { Track } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a order
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<Track>}
 */
const createTrack = async (id, updateBody) => {
  if (!id || !updateBody) throw new ApiError(httpStatus.BAD_REQUEST, 'User not found');

  const track = Track.create(id, updateBody);

  //   try {
  //     const track = new Track({
  //       name,
  //       locations,
  //       userId: id,
  //     });
  //     await track.save();
  //     return track;
  //   } catch (err) {
  //     return err.message;
  //   }
  return track;
};

module.exports = {
  createTrack,
};
