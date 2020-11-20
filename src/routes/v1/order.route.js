const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { orderValidation } = require('../../validations/index');
const { orderController } = require('../../controllers/index');

const router = express.Router();

router.route('/create').post(auth('getUsers'), validate(orderValidation.createOrder), orderController.createOrder);

// router
//   .route('/:orderId')
//   .get(auth('getUsers'), validate(orderValidation.getOrderById), orderController.getOrderById)
//   .patch(auth('getUsers'), validate(orderValidation.updateOrderById), orderController.updateOrderById)
//   .delete(auth('getUsers'), validate(orderValidation.deleteOrder), orderController.deleteOrder);

module.exports = router;
