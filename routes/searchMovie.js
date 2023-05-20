const SearchMovie = require('express').Router()
const fetchPerticular= require('../Common/FetchPerticular')

SearchMovie.post('/search',async(req,res)=>{
    try {

    const {page,show,query}= req.body;
    const data = await fetchPerticular({page,show,query})   
    res.status(200).send({
        success:true,
        message:`${data.length} movies Found!!!`,
        data
      })
    } catch (error) {
        res.status(401).send({
            success:false,
            message:"No Movie Found!!!",
            error
          }) 
    }

})

module.exports = SearchMovie;