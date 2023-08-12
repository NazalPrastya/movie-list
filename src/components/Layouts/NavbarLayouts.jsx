import { useState, useEffect, Fragment } from 'react';
import { searchMovie } from '../../services/movies.service';
import { getMovieList } from '../../services/movies.service';
import CardMovie from '../Fragments/CardMovie';
import { Link } from 'react-router-dom';

const NavbarLayouts = () => {
  const navs = [
    {
      id: 1,
      href: '/',
      name: 'Movies',
    },
    {
      id: 2,
      href: '/tv',
      name: 'Tv Series',
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleWindowScroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    setIsNavbarFixed(window.pageYOffset > fixedNav);
  };

  const handleWindowClick = (e) => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <Fragment>
      <header className={`bg-zinc-900 bg-opacity-60 top-0 left-0 w-full flex items-center z-10 absolute ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
        <div className="container">
          <div className="flex justify-between relative">
            <div className="px-4">
              <a href="#home" className="flex items-center">
                <img src="/logo.png" alt="logo" className="w-20 md:w-32 lg:w-36" />
              </a>
            </div>
            <div className=" flex items-center px-4">
              <button id="hamburger" name="hamburger" type="button" className={`block absolute right-4  lg:hidden ${isMenuOpen ? 'hamburger-active' : ''}`} onClick={handleHamburgerClick}>
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left "></span>
              </button>
              <nav
                id="nav-menu"
                className={` ${
                  isMenuOpen ? '' : 'hidden'
                } absolute py-5 bg-zinc-900 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-cyan-300 lg:dark:bg-transparent`}
              >
                <ul className="block lg:flex">
                  {navs.map((nav) => (
                    <li className="group" key={nav.id}>
                      <Link to={nav.href} className=" text-base text-white py-2 mx-8 hover:text-reddark  flex font-semibold  hover:border-b transition ease-linear">
                        {nav.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default NavbarLayouts;
