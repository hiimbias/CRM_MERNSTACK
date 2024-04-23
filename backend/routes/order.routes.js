const express = require('express');
const router = express.Router();
const { getOrders, getOrderByClient, createOrder, updateOrder, deleteOrder, deleteAllOrders } = require('../controllers/order.controller');

// controller
router.get('/', getOrders);
router.get('/:id', getOrderByClient);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
router.delete('/', deleteAllOrders);

module.exports = router;