import Carousel from 'react-multi-carousel';
import CardMovie from '../components/Fragments/CardMovie';
import ActorCard from '../components/Fragments/ActorCard';
import NavbarLayouts from '../components/Layouts/NavbarLayouts';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FooterLayout from '../components/Layouts/FooterLayout';
import { Link } from 'react-router-dom';
import { getCastTv, getDetailTv, getRecomendationTv, getTrailerTv } from '../services/series.service';

const DetailTvPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const url = 'https://image.tmdb.org/t/p/original';
  const embed = 'https://www.youtube.com/embed/';

  useEffect(() => {
    // Mengambil detail film
    getDetailTv(id, (data) => {
      setMovie(data);
    });
    getCastTv(id, (data) => {
      setCast(data.cast);
    });
    getCastTv(id, (data) => {
      setDirector(data.crew);
    });
    getTrailerTv(id, (data) => {
      setTrailer(data.results);
    });
    getRecomendationTv(id, (data) => {
      setRecomendations(data.results);
    });
  }, [id]);

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

  return (
    <Fragment>
      <NavbarLayouts></NavbarLayouts>
      {Object.keys(movie).length > 0 && (
        <section className="relative">
          <div className="h-[60vh] lg:h-[90vh] relative">
            <img src={url + movie.backdrop_path} alt="" className="w-full h-full opacity-50  object-cover" />
            <div className="absolute -bottom-10 w-full bg-gradient-to-t from-zinc-900 to-transparent h-[60vh]"></div>
            <div className="flex absolute -bottom-32 md:left-10 lg:left-20">
              <CardMovie id={movie.id}>
                <CardMovie.Header image={movie.poster_path} title={movie.original_name} rating={movie.vote_average} />
              </CardMovie>
              <div className="description py-5 flex flex-col justify-center">
                <h1 className="text-xl text-white font-bold">{movie.name}</h1>
                <div className="flex justify-start">
                  {movie.genres &&
                    movie.genres.map((genre) => (
                      <p key={genre.id} className="text-white text-xs">
                        {' '}
                        {genre.name + ' | '}
                      </p>
                    ))}
                </div>
                <span className="text-white">
                  ⭐{movie.vote_average} ({movie.vote_count}) / 10
                </span>
                <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="bg-cyan-500 w-min px-2 py-1 rounded-lg text-white hover:bg-cyan-700 shadow-md shadow-cyan-400 hover:shadow-cyan-200 duration-200">
                  Trailer
                </button>
                <Link to="/tv" className="mt-5 bg-blue-500 w-min rounded-md text-white px-2 text-sm">
                  Back
                </Link>
              </div>
            </div>
          </div>
          <div className="container pt-36 flex flex-wrap">
            <div className="w-full lg:w-5/6">
              <p className="font-bold text-white text-3xl">Overview</p>
              <p className="text-white">{movie.overview}</p>

              <div className="mt-10">
                <p className="font-bold text-white text-3xl">Cast</p>
                <Carousel responsive={responsive}>
                  {cast.map((person) => (
                    <ActorCard key={person.id} name={person.name} character={person.character} image={url + person.profile_path} />
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="w-full lg:w-1/6">
              <div className="flex flex-wrap">
                <div className="my-4">
                  <p className="text-white text-2xl font-medium">Status</p>
                  <span className="text-white">{movie.status}</span>
                </div>
                <div className="my-4">
                  <p className="text-white text-2xl font-medium">Released Date</p>
                  <span className="text-white">{movie.first_air_date}</span>
                </div>

                <div className="my-4">
                  <p className="text-white text-2xl font-medium">Episode</p>
                  <span className="text-white">{movie.last_episode_to_air.episode_number} Episode</span>
                </div>
              </div>
            </div>
          </div>

          <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            {trailer.map((trailerItem) => {
              if (trailerItem.name === 'Official Final Trailer' || trailerItem.name === 'Official Trailer' || trailerItem.type === 'Trailer') {
                return (
                  <div className="flex-wrap" key={trailerItem.key}>
                    <iframe
                      className="max-w-md"
                      key={trailerItem.key}
                      width="560"
                      height="315"
                      src={embed + trailerItem.key}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              }
              return null; // Don't display anything if the conditions are not met
            })}
          </div>
        </section>
      )}
      <div className="mt-5 container">
        {recomendations.length > 0 && <h2 className="text-2xl font-bold text-white lett tracking-wide">Recomended Movies</h2>}
        <Carousel responsive={responsive} swipeable={true} draggable={true} arrows={true} removeArrowOnDeviceType={['mobile']} keyBoardControl={true}>
          {recomendations.length > 0 &&
            recomendations.map((movie) => (
              <CardMovie link={`/tv/${movie.id}`} key={movie.id}>
                <CardMovie.Header image={movie.poster_path} title={movie.original_title} rating={movie.vote_average} />
                <CardMovie.Body title={movie.title} rating={movie.vote_average + '(' + movie.vote_count + ')' + ' / 10'} date={movie.first_air_date} />
              </CardMovie>
            ))}
        </Carousel>
      </div>

      <FooterLayout />
    </Fragment>
  );
};

export default DetailTvPage;
