import _ from 'lodash';
import db from '../db.js';
import uniqid from 'uniqid';
function index(req, res) {
    res.render('users/index', {
        users: db.data.users
    });
};

function search(req, res) {
    var q = req.query.q;
    var matchedUsers = db.data.users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    });
};

function create(req, res) {
    res.render('users/create');
};

function getID(req, res) {
    var id = req.params.id;
    var user = _.find(db.data.users, { id: id });
    res.render('users/views', {
        user: user,
    });
};

function postCreate(req, res) {
    req.body.id = uniqid();
    req.body.avatar = req.file.path.split('\\').slice(1).join('\\');
    db.data.users.push(req.body);
    db.write();
    res.redirect('/users');
};

export default { index, search, create, getID, postCreate };









