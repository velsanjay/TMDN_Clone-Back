const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 10
const secretKey = 'Abjbswh@%^&!hdbjsb'


const hashPassword = async(password)=>{
    let salt = await bcrypt.genSalt(saltRounds)
    let hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword
}

const hashCompare = async(password,hashedPassword)=>{
    return await bcrypt.compare(password,hashedPassword)
}


const createToken = async(payload)=>{
    let token = await jwt.sign(payload,secretKey,{expiresIn:'30m'})
    return token
}



module.exports={hashPassword,hashCompare,createToken,createToken}