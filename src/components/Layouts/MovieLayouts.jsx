import { Fragment, useEffect, useState } from 'react';
import CardMovie from '../Fragments/CardMovie';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getTrending } from '../../services/trending.service';

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
const MovieLayouts = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrending((data) => {
      setTrendings(data.results);
    });
  });

  return (
    <Fragment>
      <div className="flex justify-between mt-10">
        <h2 className="mx-20 font-bold text-2xl text-white">On Trending</h2>
      </div>
      <div className="container">
        <Carousel autoPlaySpeed={2500} responsive={responsive} swipeable={true} draggable={true} infinite={true} autoPlay={true} className="py-10">
          {trendings.length > 0 &&
            trendings.map((trending) => (
              <CardMovie key={trending.id} id={trending.id}>
                <CardMovie.Header image={trending.poster_path} title={trending.title} rating={trending.vote_average} />
                <CardMovie.Body title={trending.title} rating={trending.vote_average} date={trending.release_date} />
              </CardMovie>
            ))}
        </Carousel>
      </div>
    </Fragment>
  );
};

export default MovieLayouts;
