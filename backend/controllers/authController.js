const User = require('../models/userModel')
const Jimp = require('jimp');
const path = require('path');
const authServices = require('../services/authServices');

class AuthController {
    async register(req, res) {
        try {
            const { userName, email, phone, password, userImage, address, type } = req.body;
            if (!userName || !email || !phone || !password || !userImage || !address) {
                res.json({ status: false, statusCode: 220, message: "All the fields are required" });
            }
            let existEmail = await User.findOne({ email });
            let existPhone = await User.findOne({ phone });
            if (existEmail && existPhone) {
                res.json({ status: false, statusCode: 220, message: "Email and Phone Already Exists" })
            }
            else if (existPhone) {
                res.json({ status: false, statusCode: 220, message: "Phone Already Exists" })
            }
            else if (existEmail) {
                res.json({ status: false, statusCode: 220, message: "Email Already Exists" })
            }
            else {
                const hash = await authServices.encryptPassword(password);
                const buffer = Buffer.from(userImage.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''), 'base64');
                const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`
                try {
                    const jimRes = await Jimp.read(buffer)
                    jimRes.write(path.resolve(__dirname, `../storage/${imagePath}`))
                } catch (err) {
                    console.log(err)
                    res.status(500).json({ status: false, statusCode: 409, message: "Could not process the image!" });
                }

                const newUser = new User({
                    userName,
                    email,
                    password: hash,
                    phone,
                    address,
                    type,
                    userImage: `/storage/${imagePath}`
                })
                await newUser.save()
                res.json({ statusCode: 200, data: newUser, status: true, message: "reached at the end" })
            }
        } catch (err) {
            // console.log(err)
            res.status(209).json({ statusCode: 500, status: false, message: err.message })
        }
    };

    async login(req, res) {
        try {
            // let em
            // let user = await User.findOne({})
            const { loginfield, password } = req.body;
            let user = null;
            user = await User.findOne({ email: loginfield });
            if (user) {
                let verify = await authServices.checkPassword(password, user.password);
                // console.log(verify)
                if (verify) {
                    let token= await authServices.generateToken({email:user.email,phone:user.phone})
                    user.accesstoken=token;
                    await user.save();
                    res.json({ statusCode: 200, status: true, data: user, message: "Login successful" })
                }
                else {
                    res.json({ statusCode: 400, status: false, message: "Wrong Password" })
                }    
            } else {
                user = await User.findOne({ phone: loginfield });
                if (user) {
                    let verify = await authServices.checkPassword(password, user.password);
                    // console.log(verify)  
                    if (verify) {
                        let token= await authServices.generateToken({email:user.email,phone:user.phone})
                        user.accesstoken=token;
                        await user.save();
                        res.json({ statusCode: 200, status: true, data: user, message: "Login successful" })
                    }
                    else {
                        res.json({ statusCode: 400, status: false, message: "Wrong Password" })
                    }
                }else{
                    res.json({ statusCode: 400, status: false, message: "Email/Phone does not exist" })
                }
            }
        } catch (err) {
            res.status(209).json({ statusCode: 500, status: false, message: err.message })
        }
    }
}
module.exports = new AuthController();
