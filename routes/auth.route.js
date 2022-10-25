import express from 'express';
import _ from 'lodash';
import controllers from '../controllers/auth.controller.js';
const router = express.Router();
router.get('/login', controllers.login);
router.post('/login', controllers.postLogin)

export default router;