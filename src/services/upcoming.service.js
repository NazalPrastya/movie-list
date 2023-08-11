import axios from 'axios';

export const getUpcoming = async (callback) => {
  const apikey = '6d2492589357465d34307812d7214750';

  axios
    .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=6d2492589357465d34307812d7214750&page=1?api_key${apikey}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
