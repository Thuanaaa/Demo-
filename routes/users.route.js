import express from 'express';
import _ from 'lodash';
import db from '../db.js';

const router = express.Router();

router.get('', function (req, res) {
    res.render('users/index', {
        users: db.data.users
    });
});

router.get('/search', function (req, res) {
    var q = req.query.q;
    var matchedUsers = db.data.users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    });
});

router.get('/create', function (req, res) {
    res.render('users/create');
});
router.get('/:id', function (req, res) {
    var id = parseInt(req.params.id);
    var user = _.find(db.data.users, { id: id });
    res.render('users/views', {
        user: user,
    });
});

router.post('/create', function (req, res) {
    db.data.users.push(req.body);
    db.write();
    res.redirect('/users');
});

export default router;

