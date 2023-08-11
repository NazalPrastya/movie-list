import axios from 'axios';

export const getDetailMovie = async (id, callback) => {
  const key = '6d2492589357465d34307812d7214750';

  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
