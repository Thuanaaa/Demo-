import db from '../db.js';
function requireAuth(req, res, next) {
    if (!req.cookies.userId) {
        res.redirect('/auth/login');
        return;
    }
    var user = _.find(db.data.users, { id: req.cookies.userId });
    if (!user) {
        res.redirect('/auth/login');
        return;
    }
    next();
}

export default requireAuth;