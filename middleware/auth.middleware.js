import db from '../db.js';
import _ from "lodash";
function requireAuth(req, res, next) {
    if (!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }
    var user = _.find(db.data.users, { id: req.signedCookies.userId });
    if (!user) {
        res.redirect('/auth/login');
        return;
    }
    res.locals.user = user;
    next();
};

export default requireAuth;