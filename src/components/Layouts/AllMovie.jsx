import CardMovie from '../Fragments/CardMovie';
import Select from '../Elements/Select';
import Option from '../Elements/Select/Option';
import { useEffect, useState } from 'react';
import { getMovieList } from '../../services/movies.service';
import { searchMovie } from '../../services/movies.service';

const AllMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieList((data) => {
      setMovies(data.results);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMovies(query.results);
    }
  };
  console.log(movies);

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
      <div className="flex flex-col mt-10 mx-5 lg:mx-20">
        <h2 className=" font-bold text-2xl text-white">All Movies</h2>
        <Select>
          {options.map((option) => (
            <Option key={option.id} option={option.opsi}>
              {option.opsi}
            </Option>
          ))}
        </Select>
        <input
          type="text"
          id="simple-search"
          onChange={({ target }) => search(target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  0"
          placeholder="Search branch name..."
          required
        ></input>
      </div>
      <div className="lg:container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center box-border">
          {movies.length > 0 &&
            movies.map((movie) => (
              <CardMovie key={movie.id} id={movie.id}>
                <CardMovie.Header image={movie.poster_path} title={movie.title} rating={movie.vote_average} />
                <CardMovie.Body title={movie.title} rating={movie.vote_average} date={movie.release_date} />
              </CardMovie>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AllMovie;
