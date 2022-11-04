import db from '../db.js';
import _ from 'lodash';

function addToCard(req, res, next) {
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;

    if (!sessionId) {
        res.redirect('/prod');
        return;
    }
    //var count = _.find(db.data.sessions, { id: sessionId }).get('cart.' + productId, 0)
    var cart = _.findIndex(db.data.sessions, { id: sessionId })
    if (cart != -1) {
        _.set(db.data.sessions[cart], `cart._${productId}`, 1);
    }
    db.write();
    res.redirect('/prod');
}

export default addToCard;