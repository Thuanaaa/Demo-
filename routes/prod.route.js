import express from 'express';
import _ from 'lodash';
import index from '../controllers/prod.controller.js';
const router = express.Router();
router.get('/', index);
export default router;