import { type FC } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faGithub,
  faLinkedin,
  faTiktok,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <a href="https://x.com/aimeelramirez" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} /> X
      </a>
      <a href="https://github.com/aimeelramirez" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/aimeelramirez" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
      <a href="https://www.tiktok.com/@aimeelramirez" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} /> TikTok
      </a>
      <a href="https://www.instagram.com/aimeelramirez" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} /> Instagram
      </a>
      <a href="https://www.pinterest.com/aimeelramirez" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faPinterest} /> Pinterest
      </a>
    </footer>
  );
};

export default Footer;
