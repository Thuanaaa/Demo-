import _ from 'lodash';
import md5 from 'md5';
import db from '../db.js';
function login(req, res) {
    res.render('auth/login')
};
function postLogin(req, res, next) {
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
    var hashedpassword = md5(password);
    if (user.password !== hashedpassword) {
        res.render('auth/login', {
            errors: [
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userId', user.id, {
        signed: true
    });
    res.redirect('/users');
    next();
}
export default { login, postLogin };