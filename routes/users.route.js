import express from 'express';
import _ from 'lodash';
import controllers from '../controllers/users.controller.js';
import requireCreate from '../validate/user.validate.js';
import multer from 'multer';
const upload = multer({ dest: "./public/uploads" });
const router = express.Router();
router.get('/', controllers.index);
router.get('/search', controllers.search);
router.get('/create', controllers.create);
router.get('/:id', controllers.getID);;
router.get('/update', controllers.update)
router.post('/create', upload.single('avatar'), requireCreate, controllers.postCreate);
router.put('/update/:id', controllers.putUpdate);

export default router;

