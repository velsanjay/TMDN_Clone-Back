const HomeRouter = require('express').Router()
const fetchMovies = require('../Common/FetchData')
const jwt = require('jsonwebtoken')
// const validate = require('../Common/auth')

const validate = async(req,res,next)=>{
  if(req.headers.authorization)
    {
        let token = req.headers.authorization.split(" ")[1]
        let data = await jwt.decode(token)
        if(Math.floor((+new Date())/1000) < data.exp)
            next()
        else
            res.status(401).send({message:"Token Expired"})
    }
    else
    {
        res.status(400).send({message:"Token Not Found"})
    }
}


HomeRouter.get('/', validate, async(req,res)=>{
  try {
    const {page} = req.query;
    
    const data = await fetchMovies({page})
    return res.status(200).send({
      success:true,
      message:`${data.length} movies Found!!!`,
      data
    })
  } catch (error) {
    return res.status(401).send({
      success:false,
      message:"No Movie Found!!!",
      error
    })
  }
})

module.exports=HomeRouter;