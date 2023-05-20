const GetMovieRoute = require('express').Router();
const fetchMovies = require('../Common/FetchData');

GetMovieRoute.post('/show',async(req,res)=>{
    try {
        const {show,detail, page}= req.body;

       
        const data = await fetchMovies({show,detail,page})

        return res.status(200).send({
            success:true,
            message:`${data.length} Shows Found!!!`,
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

module.exports = GetMovieRoute;
