import _ from 'lodash';
import db from '../db.js';
function login(req, res) {
    res.render('auth/login')
};
function postLogin(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var user = _.find(db.data.users, { email: email });
    if (!user) {
        res.render('auth/login', {
            errors: [
                'User does not exist.'
            ],
            values: req.body
        });
        return;
    }
    if (user.password !== password) {
        res.render('auth/login', {
            errors: [
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userID', user.id);
    res.redirect('/users');
}
export default { login, postLogin };