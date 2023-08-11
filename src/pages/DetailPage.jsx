import Carousel from 'react-multi-carousel';
import CardMovie from '../components/Fragments/CardMovie';
import ActorCard from '../components/Fragments/ActorCard';
import NavbarLayouts from '../components/Layouts/NavbarLayouts';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovie } from '../services/detail.service';

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setmovie] = useState({});
  const url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    getDetailMovie(id, (data) => {
      setmovie(data);
    });
  }, [id]);
  console.log(movie);
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

  return (
    <Fragment>
      <NavbarLayouts></NavbarLayouts>
      {Object.keys(movie).length > 0 && (
        <section className="">
          <div className="h-screen relative">
            <img src={url + movie.backdrop_path} alt="" className="w-full h-full opacity-50" />
            <div className="absolute -bottom-20 w-full bg-gradient-to-t from-zinc-900 to-transparent h-[60vh]"></div>
          </div>
          <div className="flex absolute -bottom-32 left-20">
            <CardMovie>
              <CardMovie.Header image={movie.poster_path} title={movie.original_title} rating={movie.vote_average} />
            </CardMovie>
            <div className="description py-5 flex flex-col justify-center">
              <h1 className="text-xl text-white font-bold">{movie.title}</h1>
              <div className="flex">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <p key={genre.id} className="text-white ">
                      {' '}
                      {genre.name} |{' '}
                    </p>
                  ))}
              </div>
              <span className="text-white">⭐{movie.vote_average}</span>
            </div>
          </div>
          <div className="container pt-36 flex flex-wrap">
            <div className="w-5/6">
              <p className="font-bold text-white text-3xl">Overview</p>
              <p className="text-white">{movie.overview}</p>
              <div className="flex">
                <div className="mt-10 mr-28">
                  <p className="font-bold text-white text-3xl">Story</p>
                  <p className="text-white">John Cena</p>
                </div>
                <div className="mt-10">
                  <p className="font-bold text-white text-3xl">Director</p>
                  <p className="text-white">John Cena</p>
                </div>
              </div>
              <div className="mt-10">
                <p className="font-bold text-white text-3xl">Cast</p>
                <Carousel responsive={responsive}>
                  <ActorCard name={movie.name} character={movie.character} image={movie.aImage} />
                </Carousel>
              </div>
            </div>
            <div className="w-1/6">
              <div className="my-4">
                <p className="text-white text-2xl font-bold">Status</p>
                <span className="text-white">{movie.status}</span>
              </div>
              <div className="my-4">
                <p className="text-white text-2xl font-bold">Released Date</p>
                <span className="text-white">{movie.release_date}</span>
              </div>
              <div className="my-4">
                <p className="text-white text-2xl font-bold">Language</p>
                <span className="text-white">{movie.original_language}</span>
              </div>
              <div className="my-4">
                <p className="text-white text-2xl font-bold">Duration</p>
                <span className="text-white">{movie.runtime} min</span>
              </div>
              <div className="my-4">
                <p className="text-white text-2xl font-bold">Budget</p>
                <span className="text-white">$ {movie.budget.toLocaleString('us-US', { styles: 'currency', currency: 'USD' })}</span>
              </div>
              <div className="my-4">
                <p className="text-white text-2xl font-bold">Revenue</p>
                <span className="text-white">$ {movie.revenue.toLocaleString('us-US', { styles: 'currency', currency: 'USD' })}</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default DetailPage;
