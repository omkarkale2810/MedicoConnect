const jwt = require("jsonwebtoken");

const secret = "@!omkar!kale9325";


function create_token_for_user(user){
    const payload = {
        id: user._id,
        email: user.email,
    }
}


module.exports = {
    create_token_for_user,
}