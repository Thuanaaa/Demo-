import express from 'express';
import _ from 'lodash';
import db from '../db.js';
import controllers from '../controllers/users.controller.js';

const router = express.Router();

router.get('/', controllers.index);
router.get('/search', controllers.search);
router.get('/create', controllers.create);
router.get('/:id', controllers.getID);
router.post('/create', controllers.postCreate);

export default router;

