import { faGithub, faGithubAlt, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterLayout = () => {
  return (
    <footer className="bg-blue-950">
      <div className="flex flex-col justify-between items-center">
        <div className="my-2">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="my-2">
          <a href="#" className="text-white">
            &copy; 2021 Nazal Gusti Prastya
          </a>
        </div>
        <div className="flex gap-x-3 my-2">
          <a href="https://www.instagram.com/nazalprastya/?hl=id" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white hover:text-red-600"></FontAwesomeIcon>
          </a>
          <a href="https://www.instagram.com/nazalprastya/?hl=id" target="_blank">
            <FontAwesomeIcon icon={faPinterest} className="text-2xl text-white hover:text-red-600"></FontAwesomeIcon>
          </a>
          <a href="https://www.instagram.com/nazalprastya/?hl=id" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="text-2xl text-white hover:text-red-600"></FontAwesomeIcon>
          </a>
        </div>
        <div className="text-white my-2">
          <p className="text-sm">
            Built with{' '}
            <a href="#" className="underline">
              ReactJS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
