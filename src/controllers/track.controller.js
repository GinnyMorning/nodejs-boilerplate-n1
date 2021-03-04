const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { trackService } = require('../services');

const createTrack = catchAsync(async (req, res) => {
  const track = await trackService.createTrack(req.body);
  res.status(httpStatus.CREATED).send(track);
});
const getTracks = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['id', 'userId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await trackService.queryTracks(filter, options);
  res.send(result);
});
const getTrackibyId = catchAsync(async (req, res) => {
  const track = await trackService.getTrackById(req.body.trackId);
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
