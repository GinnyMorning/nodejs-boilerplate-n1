const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const trackValidation = require('../../validations/track.validation');
const trackController = require('../../controllers/track.controller');

const router = express.Router();
router.route('/create').post(auth('getUsers'), validate(trackValidation.createOrderValidate), trackController.createTrack);

router
  .route('/')
  // .post(auth('getUsers'), validate(trackValidation.createOrderValidate), trackController.createTrack)
  .get(auth('getUsers'), validate(trackValidation.getTracksValidate), trackController.getTracks);

router
  .route('/:trackId')
  .get(auth('getUsers'), validate(trackValidation.getTrackByIdValidate), trackController.getTrackibyId)
  .delete(auth('getUsers'), validate(trackValidation.deleteTrackValidation), trackController.deleteTrack);

module.exports = router;
