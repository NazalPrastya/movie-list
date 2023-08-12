import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const apikey = '6d2492589357465d34307812d7214750';
export const getMovieList = async (page, callback) => {
  try {
    const res = await axios.get(`${url}/movie/popular?api_key=${apikey}&page=${page}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};
export const getTopRated = async (callback) => {
  try {
    const res = await axios.get(`${url}/movie/top_rated?api_key=${apikey}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const searchMovie = async (q) => {
  const res = await axios.get(`${url}/search/movie?api_key=${apikey}&query=${q}`);
  return res.data;
};

export const getGenresList = async (callback) => {
  try {
    const res = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getCast = async (id, callback) => {
  try {
    const res = await axios.get(`${url}/movie/${id}/credits?api_key=${apikey}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getTrailer = async (id, callback) => {
  try {
    const res = await axios.get(`${url}/movie/${id}/videos?api_key=${apikey}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};
