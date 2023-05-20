const { default: axios } = require("axios");

const fetchMovies = async ({page,show,detail}) => {
    try {
        if(!page){
            page=1
        }
        if(!show){
            show="movie"
        }
        if(!detail){
            detail="popular"
        }
        
      let result;
      await axios
        .get(
          `https://api.themoviedb.org/3/${show}/${detail}?api_key=3ccf0748623e30bf009b38eb3b9c6417&page=${page}`
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

  module.exports=fetchMovies;