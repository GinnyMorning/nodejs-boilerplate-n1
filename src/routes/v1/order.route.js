const express = require('express');
const validate = require('../../middlewares/validate');
const { orderValidation } = require('../../validations/index');
const { orderController } = require('../../controllers/index');

const router = express.Router();

router.post('/create-order', validate(orderValidation.createOrder), orderController.createOrder);
router.get('/get-order/:orderId', validate(orderValidation.getOrderById), orderController.getOrderById);
router.put('/update-order/:orderId', validate(orderValidation.updateOrderById), orderController.updateOrderById);
router.delete('/delete-order/:orderId', validate(orderValidation.deleteOrder), orderController.deleteOrder);

module.exports = router;
