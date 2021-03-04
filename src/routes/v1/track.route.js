const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const trackValidation = require('../../validations/track.validation');
const trackController = require('../../controllers/track.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(trackValidation.createOrderValidate), trackController.createTrack)
  .get(auth('manageUsers'), validate(trackValidation.getTracksValidate), trackController.getTracks);

router
  .route('/:trackId')
  .get(auth('getTrack'), validate(trackValidation.getTrackByIdValidate), trackController.getTrackibyId)
  .delete(auth('deleteTrack'), validate(trackValidation.deleteTrackValidation), trackController.deleteTrack);

module.exports = router;
