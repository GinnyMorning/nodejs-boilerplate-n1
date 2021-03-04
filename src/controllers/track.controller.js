const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { trackService } = require('../services');

const createTrack = catchAsync(async (req, res) => {
  const track = await trackService.createTrack(req.body);
  res.status(httpStatus.CREATED).send(track);
});
const getTracks = catchAsync(async (req, res) => {
  const tracks = trackService.getTracks(req.params.userId);
  res.send(tracks);
});
const getTrackibyId = catchAsync(async (req, res) => {
  const track = await trackService.findTrackById(req.body.trackId);
  res.send(track);
});

const deleteTrack = catchAsync(async (req, res) => {
  await trackService.deleteTrackById(req.body.trackId);
  res.status(httpStatus.NO_CONTENT).send();
});
module.exports = {
  createTrack,
  getTrackibyId,
  deleteTrack,
  getTracks,
};
