import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const apikey = '6d2492589357465d34307812d7214750';
export const getMovieList = async (callback) => {
  try {
    const res = await axios.get(`${url}/movie/popular?api_key=${apikey}&page=1`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getGenresList = async (callback) => {
  try {
    const res = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};
