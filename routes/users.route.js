import express from 'express';
import _ from 'lodash';
import controllers from '../controllers/users.controller.js';
import requireCreate from '../validate/user.validate.js';
const router = express.Router();
router.get('/', controllers.index);
router.get('/search', controllers.search);
router.get('/create', controllers.create);
router.get('/:id', controllers.getID);
router.post('/create', requireCreate, controllers.postCreate);

export default router;

