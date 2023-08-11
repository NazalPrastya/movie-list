import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardMovie from '../Fragments/CardMovie';
import Select from '../Elements/Select';
import Option from '../Elements/Select/Option';
import { getGenresList, getMovieList } from '../../services/movies.service';

const CategoryMLayouts = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    getMovieList((data) => {
      setMovies(data.results);
    });
    getGenresList((data) => {
      setGenres(data.genres);
    });
  }, []);

  useEffect(() => {
    if (!selectedGenre) {
      setFilteredMovies(movies);
      return;
    }
    const genreMovies = movies.filter((movie) => {
      return movie.genre_ids.includes(selectedGenre.id);
    });
    setFilteredMovies(genreMovies);
  }, [selectedGenre, movies]);

  const handleGenre = (selectedGenre) => {
    setSelectedGenre(selectedGenre);
  };

  return (
    <section className="py-20">
      <div className="flex flex-col justify-between mt-10 mx-20">
        <h2 className="font-bold text-2xl text-white">Browse By Category</h2>
        <Select>
          {genres.map((genre) => (
            <Option key={genre.id} value={genre.id} onChange={() => handleGenre(genre)}>
              {genre.name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="container">
        <Carousel autoPlaySpeed={2500} showDots={true} responsive={responsive} swipeable={true} draggable={true} className="py-10">
          {filteredMovies.map((movie) => (
            <CardMovie key={movie.id} id={movie.id}>
              <CardMovie.Header image={movie.poster_path} title={movie.title} />
              <CardMovie.Body title={movie.title} rating={movie.vote_average} date={movie.release_date} />
            </CardMovie>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CategoryMLayouts;
