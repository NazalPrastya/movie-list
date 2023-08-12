import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const apikey = '6d2492589357465d34307812d7214750';
export const getOnTheAir = async (callback) => {
  try {
    const res = await axios.get(`${url}/tv/on_the_air?api_key=${apikey}&page=1`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getTrendingTv = async (callback) => {
  try {
    const res = await axios.get(`${url}/trending/tv/day?api_key=${apikey}&page=1`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getTopRatedTv = async (callback) => {
  try {
    const res = await axios.get(`${url}/tv/top_rated?api_key=${apikey}&page=1`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllTv = async (page, callback) => {
  try {
    const res = await axios.get(`${url}/tv/popular?api_key=${apikey}&page=${page}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const searchTv = async (q) => {
  const res = await axios.get(`${url}/search/tv?api_key=${apikey}&query=${q}`);
  return res.data;
};
