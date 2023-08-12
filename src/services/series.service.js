import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const apikey = '6d2492589357465d34307812d7214750';
export const getOnTheAir = async (callback) => {
  try {
    const res = await axios.get(`${url}/tv/on_the_air&page=1?api_key=${apikey}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getTrendingTv = async (callback) => {
  try {
    const res = await axios.get(`${url}/trending/tv/day&page=1?api_key=${apikey}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getTopRatedTv = async (callback) => {
  try {
    const res = await axios.get(`${url}/tv/top_rated&page=1?api_key=${apikey}`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};
