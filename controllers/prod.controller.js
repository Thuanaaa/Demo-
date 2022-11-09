import Product from '../models/product.model.js';
import _ from 'lodash';
async function index(req, res) {
    var products = await Product.find();
    res.render("prod/index", {
        products: products
    })
};
export default index;