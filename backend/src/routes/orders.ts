import express from 'express';
const router = express.Router();
import {postOrder,
  editOrder,
  deleteOrder,
  getOrderById,
  getOrders
} from '../controllers/orders.controller'

router.get('/',getOrders)
router.get('/:id',getOrderById)
router.post('/', postOrder)
router.put('/', editOrder)
router.delete('/', deleteOrder)