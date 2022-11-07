import uniqid from 'uniqid';
import db from '../db.js'
function create(req, res, next) {
    res.render('transfer/create', {
        csrfToken: req.csrfToken()
    });
}

function postCreate(req, res, next) {
    var data = {
        id: uniqid(),
        amount: parseInt(req.body.amount),
        account: req.body.accountId,
        userId: req.signedCookies.userId
    }
    db.data.transfers.push(data);
    db.write();
    res.redirect('/transfer/create');
}
export default { create, postCreate }