import 'boxicons';
import { Link } from 'react-router-dom';
const CardMovie = (props) => {
  const { children, id } = props;
  return (
    <div className=" max-w-[13rem] mx-5  group mt-5  rounded-lg relative hover:scale-110 duration-300  ease-linear overflow-hidden shadow-red-400 shadow">
      <Link to={`/detail/${id}`}>{children}</Link>
    </div>
  );
};

const Header = (props) => {
  const { image, title, rating } = props;
  const imageUrl = `https://image.tmdb.org/t/p/original/${image}`;
  return (
    <div className="w-full shadow-md  rounded-lg relative">
      <span className="absolute right-0 bg-blue-800 text-white px-1 rounded text-sm py-1">⭐{rating}</span>
      <img src={imageUrl} alt={title} className="rounded-lg" />
    </div>
  );
};

const Body = (props) => {
  const { title, rating, date } = props;
  return (
    <div className="px-3 absolute -bottom-20 py-3 left-0 group-hover:bottom-0 group-hover:bg-zinc-800 w-full group-hover:bg-opacity-80 ease-linear">
      <p className="font-semibold text-lg group-hover:text-red-700 text-white">{title}</p>
      <p className="text-sm text-white">⭐{rating}</p>
      <p className="text-sm text-white">{date}</p>
    </div>
  );
};

CardMovie.Header = Header;
CardMovie.Body = Body;

export default CardMovie;
