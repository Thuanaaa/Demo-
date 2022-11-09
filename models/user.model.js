import mongoose from 'mongoose';
var userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    avatar: String,
    email: String,
    password: String
})
var User = mongoose.model("User", userSchema, "users")
export default User;