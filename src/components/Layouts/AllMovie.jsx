import CardMovie from '../Fragments/CardMovie';
import Select from '../Elements/Select';
import Option from '../Elements/Select/Option';
import { useEffect, useState } from 'react';
import { getMovieList } from '../../services/movies.service';
import { searchMovie } from '../../services/movies.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AllMovie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage >= 1) {
      setPage(newPage);
    }
  };
  useEffect(() => {
    getMovieList(page, (data) => {
      setMovies(data.results);
    });
  }, [page]);

  // console.log(movies);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setMovies(query.results);
    }
  };

  return (
    <section className="py-20">
      <div className="flex flex-col mt-10 mx-5 lg:mx-20">
        <h2 className=" font-bold text-2xl text-white">All Movies</h2>

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
        <div className="flex justify-end mt-3 space-x-5">
          <button onClick={() => handlePageChange(page - 1)}>
            <FontAwesomeIcon icon={faArrowLeft} className="text-white text-3xl hover:text-yellow-300"></FontAwesomeIcon>
          </button>
          <span className="text-yellow-300   text-lg">{page}</span>
          <button onClick={() => handlePageChange(page + 1)}>
            <FontAwesomeIcon icon={faArrowRight} className="text-white text-3xl hover:text-yellow-300"></FontAwesomeIcon>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center box-border">
          {movies.length > 0 &&
            movies.map((movie) => (
              <CardMovie key={movie.id} link={`/detail/${movie.id}`}>
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
