const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')
const saltRounds = 10;

class AuthService{
    async encryptPassword(password){
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(password, salt);
    }
    async checkPassword(password,hash){
        return bcrypt.compareSync(password, hash);
    }
    async generateToken(payload){
        return jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, {
            expiresIn: '1h'
        })
    }
}

module.exports=new AuthService();