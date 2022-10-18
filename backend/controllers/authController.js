const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const Jimp=require('jimp');
const saltRounds = 10;
const path=require('path');

// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
class AuthController {
    async register(req, res) {
        try {
            const { userName, email, phone, password, userImage, address,type } = req.body;
            if (!userName || !email || !phone || !password || !userImage || !address ) {
                res.json({status:false, statusCode: 220, message: "All the fields are required" });
            }
            let existEmail=await User.findOne({email});
            let existPhone=await User.findOne({phone});
            if(existEmail && existPhone){
                res.json({status:false, statusCode: 220, message: "Email and Phone Already Exists"})
            }
            else if(existPhone){
                res.json({status:false, statusCode: 220, message: "Phone Already Exists"})
            }
            else if(existEmail){
                res.json({status:false, statusCode: 220, message: "Email Already Exists"})
            }
            else{
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(password, salt);
                const buffer=Buffer.from(userImage.replace(/^data:image\/(png|jpg|jpeg);base64,/,''),'base64');
                const imagePath=`${Date.now()}-${Math.round(Math.random()*1e9)}.png`
                try{
                    const jimRes=await Jimp.read(buffer)
                    jimRes.write(path.resolve(__dirname,`../storage/${imagePath}`))
            }catch(err){
                console.log(err)
                res.status(500).json({status:false,statusCode:409,message:"Could not process the image!"});
            }

            const newUser=new User({
                userName,
                email,
                password:hash,
                phone,
                address,
                type,
                userImage:`/storage/${imagePath}`
            })
            newUser.save()
            res.json({statusCode:200,data:newUser,status:true, message: "reached at the end" })
        }
        } catch (err) {
            console.log(err)
            res.status(209).json({ statusCode: 209,status:false, message: err.message })
        }
    };
}
module.exports = new AuthController();
