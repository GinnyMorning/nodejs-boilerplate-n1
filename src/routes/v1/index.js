const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const orderRoute = require('./order.route');
const trackRoute = require('./track.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/docs', docsRoute);
router.use('/orders', orderRoute);
router.use('/tracks', trackRoute);

module.exports = router;
