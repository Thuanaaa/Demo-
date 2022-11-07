import express from 'express';
import _ from 'lodash';
import controllers from '../controllers/transfer.controller.js';
const router = express.Router();
router.get('/create', controllers.create);
router.post('/create', controllers.postCreate);
export default router;