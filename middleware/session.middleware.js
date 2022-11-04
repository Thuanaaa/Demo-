import uniqid from 'uniqid';
import db from '../db.js';
export default function (req, res, next) {
    if (!req.signedCookies.sessionId) {
        var sessionId = uniqid()
        res.cookie('sessionId', sessionId, {
            signed: true
        });
    }
    db.data.sessions.push({
        id: sessionId
    });
    db.write();
    next();
}