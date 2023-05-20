const GetByIdRouter = require('express').Router();
const fetchById = require('../Common/FetchById')

GetByIdRouter.post('/id',async(req, res)=>{
    try {
        
    
    const {id} = req.body;

    let show = "movie";
   let data = await fetchById({id, show})
   console.log(data)

    if(data){
       return res.status(200).send({
            success:true,
            message: "Data Fetched",
            data
        })
    }else{
        show = "tv"
        
        data = await fetchById({id,show})

       return res.status(200).send({
            success:true,
            message: "Data is Fetched",
            data
        })
    }
} catch (error) {
        console.log(error);
}

})


module.exports = GetByIdRouter