import CardMovie from '../Fragments/CardMovie';
import Select from '../Elements/Select';
import Option from '../Elements/Select/Option';
import { useEffect, useState } from 'react';
import { getMovieList } from '../../services/movies.service';

const AllMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieList((data) => {
      setMovies(data.results);
    });
  });
  // console.log(movies);

  const options = [
    {
      id: 1,
      opsi: 'Popular',
    },
    {
      id: 2,
      opsi: 'Upcoming',
    },
    {
      id: 3,
      opsi: 'Top Rating',
    },
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col mt-10 mx-20">
        <h2 className=" font-bold text-2xl text-white">All Movies</h2>
        <Select>
          {options.map((option) => (
            <Option key={option.id} option={option.opsi}>
              {option.opsi}
            </Option>
          ))}
        </Select>
      </div>
      <div className="flex flex-wrap justify-center">
        {movies.length > 0 &&
          movies.map((movie) => (
            <CardMovie key={movie.id} id={movie.id}>
              <CardMovie.Header image={movie.poster_path} title={movie.title} rating={movie.vote_average} />
              <CardMovie.Body title={movie.title} rating={movie.vote_average} date={movie.date} />
            </CardMovie>
          ))}
      </div>
    </section>
  );
};

export default AllMovie;
