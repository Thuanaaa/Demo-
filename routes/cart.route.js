import express from 'express';
import _ from 'lodash';
import addToCard from '../controllers/cart.controller.js';
const router = express.Router();
router.get('/add/:productId', addToCard);
export default router;