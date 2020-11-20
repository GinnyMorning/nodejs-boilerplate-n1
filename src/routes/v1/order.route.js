const express = require('express');
const validate = require('../../middlewares/validate');
const { orderValidation } = require('../../validations/index');
const { orderController } = require('../../controllers/index');

const router = express.Router();

router.post('/create-order', validate(orderValidation.createOrder), orderController.createOrder);
router.post('/get-order', validate(orderValidation.getOrderById), orderController.getOrderById);
router.post('/update-order', validate(orderValidation.updateOrderById), orderController.updateOrderById);
router.post('/delete-order', validate(orderValidation.deleteOrder), orderController.deleteOrder);

module.exports = router;
