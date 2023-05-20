const { default: axios } = require("axios");

const fetchPerticular = async ({page,show,query}) => {
    try {
        if(!page){
            page=1
        }
      let result;
      await axios
        .get(
          `https://api.themoviedb.org/3/search/${show}?api_key=3ccf0748623e30bf009b38eb3b9c6417&query=${query}&page=${page}`
        )
        .then((response) => {
          result = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  module.exports=fetchPerticular;