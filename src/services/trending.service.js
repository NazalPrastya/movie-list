import axios from 'axios';

export const getTrending = async (callback) => {
  const key = '6d2492589357465d34307812d7214750';

  axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=1`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
