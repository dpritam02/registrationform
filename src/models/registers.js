const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword : String 
});
const User = mongoose.model('User', userSchema);

export default User;