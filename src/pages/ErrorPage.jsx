import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-[#000000]">
      <h1 className="text-white text-3xl md:text-5xl mb-3 font-semibold italic">Error Page 404</h1>
      <img src="eror.gif" alt="eror" className=" w-40 md:w-56" />
      <Link to="/" className=" underline text-yellow-300">
        Back
      </Link>
    </div>
  );
};

export default ErrorPage;
