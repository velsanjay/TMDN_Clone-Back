const { default: axios } = require("axios");

const fetchById = async ({show,id}) => {
    try {
        
      let result= await axios.get(`https://api.themoviedb.org/3/${show}/${id}?api_key=3ccf0748623e30bf009b38eb3b9c6417&page=1`)
        // console.log(result.data);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  };

  module.exports=fetchById;