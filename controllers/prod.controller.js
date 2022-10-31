import db from '../db.js';
import _ from 'lodash';
function index(req, res) {
    var perPage = 4;
    var page = (req.query.page) || 1;
    var start = (page - 1) * perPage;
    var end = page * perPage;
    var preV = 0, next = 0;
    if (page > 1) {
        preV = page - 1;
        next = ++page;
    }
    else {
        preV = 1;
        next = 2;
    }
    if (next > parseInt(db.data.products.length / 4)) next = parseInt(db.data.products.length / 4)
    res.render('prod/index', {
        products: db.data.products.slice(start, end),
        page: page,
        preV: preV,
        next: next
    });
};
export default index;