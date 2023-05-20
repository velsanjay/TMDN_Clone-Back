const SignInRouter = require('express').Router()
const {  hashCompare, createToken } = require('../Common/auth')
const userModel= require('../Schema/UserSchema')

SignInRouter.post('/signin', async (req, res, next) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email })

    if (user) {
        if (await hashCompare(password,user.password)) {
            let token = await createToken({
                name:user.name,
                email:user.email,
                id:user._id,
                role:user.role
              })
            res.status(200).send({
                success: true,
                message: "SignIn Successfully!!!",
                data: user,
                token
            })
        } else {
            res.status(402).send({
                success: false,
                message: "Invalid Password!!!"
            })
        }
    } else {
        res.status(403).send({
            success: false,
            message: "User Not Found"
        })
    }
})

module.exports = SignInRouter