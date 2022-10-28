import db from '../db.js';
function index(req, res) {
    res.render('prod/index', {
        users: db.data.products
    });
};
export default index;