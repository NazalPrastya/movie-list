import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import { getUpcoming } from '../../services/upcoming.service';
import { Link } from 'react-router-dom';

const BigCarousel = () => {
  const [upcomings, setUpcomings] = useState([]);
  const urlImage = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    getUpcoming((data) => {
      setUpcomings(data.results);
    });
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // console.log(upcomings);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="relative ">
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-zinc-900 to-transparent h-[15vh] z-10"></div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        arrows={false}
        showDots={true}
        ssr={true}
        additionalTransfrom={0}
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        itemClass="carousel-item-padding-bottom-40-px"
        dotListClass="dotStyle z-40 active-dot-red"
      >
        {upcomings.length > 0 &&
          upcomings.map((upcoming) => (
            <div className="w-full h-[70vh] lg:min-h-[100vh] relative z-30" key={upcoming.id}>
              <img src={urlImage + upcoming.backdrop_path} alt={upcoming.title} className="w-full h-full  bg-center  opacity-40" />
              <div className=" absolute bottom-60 left-5 lg:bottom-52 lg:left-20 ">
                <p className=" text-white text-2xl lg:text-5xl font-bold  mt-5 mb-5">{upcoming.title}</p>
                <span className="text-white bg-blue-600 px-3 py-1 text-[0.6rem] md:text-xs rounded-full mb-6">UpComing Movies</span>
                <div className="flex mt-6">
                  <Link
                    to={`/detail/${upcoming.id}`}
                    className="px-5 py-2 md:px-8 md:py-3 bg-red-600 text-sm lg:text-xl  mr-5 text-white font-bold rounded hover:bg-white hover:text-red-600 hover:border-red-600 hover:ring-red-600 duration-300 hover:shadow-white hover:shadow-md"
                  >
                    See Detail
                  </Link>
                  <div className="flex flex-col text-white">
                    <p className="text-sm">Realease : {formatDate(upcoming.release_date)}</p>
                    <p className="text-xs">
                      Vote : {upcoming.vote_average} ({upcoming.vote_count})
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default BigCarousel;
