import mongoose from 'mongoose';
var productSchema = new mongoose.Schema({
    name: String,
    image: String
})
var Product = mongoose.model("Product", productSchema)
export default Product;