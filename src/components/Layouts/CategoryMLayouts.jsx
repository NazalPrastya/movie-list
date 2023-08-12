import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardMovie from '../Fragments/CardMovie';
import { getTopRated } from '../../services/movies.service';

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
      breakpoint: { max: 1024, min: 564 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 2,
    },
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRated((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <section className="py-20">
      <div className="flex flex-col justify-between mt-10 mx-2 lg:mx-20">
        <h2 className="font-bold text-2xl text-white">Top Rated Movie</h2>
      </div>
      <div className="lg:container">
        <Carousel autoPlaySpeed={2500} showDots={true} responsive={responsive} swipeable={true} draggable={true} removeArrowOnDeviceType={['tablet', 'mobile']} keyBoardControl={true} className="py-10">
          {movies.map((movie) => (
            <CardMovie key={movie.id} link={`/detail/${movie.id}`}>
              {movie.poster_path && <CardMovie.Header image={movie.poster_path} title={movie.title} rating={movie.media_type} />}
              <CardMovie.Body title={movie.title} rating={movie.vote_average + '(' + movie.vote_count + ')' + ' / 10'} date={movie.release_date} />
            </CardMovie>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CategoryMLayouts;
