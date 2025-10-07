import React, { useState, type FC } from 'react';
import { useSprings, animated, type AnimatedProps } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCode,
  faServer,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './context/ThemeContext'; // ✅ Context
import './Project.css';

const AnimatedDiv = React.forwardRef<HTMLDivElement, AnimatedProps<any>>((props) => {
  return <animated.div {...props} />;
});

interface ProjectItem {
    id:number;
    title: string;
    description: string;
    link: string;
    repo?: string;
    icon: IconDefinition;
    image: string;
}

const projects: ProjectItem[] = [
    {   
       id: 0,
        title: 'Loop Detector App',
        description: `A real-time computer vision tool built with Flask, OpenCV, and MediaPipe.
It detects hand loops using gesture recognition. The backend is deployed on Render, and the frontend is styled with vanilla HTML/CSS.`,
        link: 'https://aimeelramirez.com/loop-detector-app/frontend/',
        repo: 'https://github.com/aimeelramirez/loop-detector-app',
        icon: faMagnifyingGlass,
        image: 'https://repository-images.githubusercontent.com/971783856/249437d5-17ba-428d-a306-de0cd3557185'

    },
    {
       id: 1,
        title: 'Portfolio Site',
        description: `This site is built with React and TypeScript, featuring animated sliders, responsive layout, and clear structure.
Deployed to GitHub Pages and fully optimized for mobile.`,
        link: 'https://aimeelramirez.com',
        repo: 'https://github.com/aimeelramirez/aimeelramirez.github.io',
        icon: faCode,
        image: '/aimee.jpg'

    },
    {
       id: 2,
        title: 'aimeelramirez.dev',
        description: `A clean, static site hosted on cPanel with optional PHP/MySQL backend integration.
Demonstrates traditional hosting approaches alongside modern projects.`,
        link: 'https://aimeelramirez.dev',
        repo: '_blank',
        icon: faServer,
        image: 'https://kinsta.com/wp-content/uploads/2017/12/what-is-cpanel-1024x512.png'

    },
];


const Project: FC = () => {
  const { theme } = useTheme(); // ✅ context theme
  const [activeIndex, setActiveIndex] = useState(0);

  const springs = useSprings(
    projects.length,
    projects.map((_, i) => {
      const offset = i - activeIndex;
      return {
        transform: `perspective(1200px) rotateY(${offset * 10}deg) translateX(${offset * 130}px) scale(${i === activeIndex ? 1.08 : 0.94})`,
        zIndex: i === projects[i].id && projects[i].id == 2 ? projects[i].id - 2 : projects[i].id,
        config: { tension: 170, friction: 26, mass: 1.2 },
      };
    })
  );

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="project-wrapper">
      <div className="card-stack">
        {springs.map((style, i) => (
          <AnimatedDiv
            key={i}
            style={style}
            className={`card ${i === activeIndex ? 'active' : ''} ${theme === 'dark' ? 'dark' : 'light'}`}
            onClick={() => setActiveIndex(i)}
          >
            <FontAwesomeIcon icon={projects[i].icon} size="2x" className="card-icon" />
            <h4 className="card-title">{projects[i].title}</h4>
            <img className="hero-img" src={projects[i].image} alt={`${projects[i].title} preview`} />
          </AnimatedDiv>
        ))}
      </div>

      <div className="project-details">
        <h3>{projects[activeIndex].title}</h3>
        <p>{projects[activeIndex].description}</p>
        <a href={projects[activeIndex].link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        <br />
        <a
          href={projects[activeIndex].repo}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
        >
          GitHub Repository
        </a>
        <div className="buttons">
          <button onClick={prev}>◀ Prev</button>
          <button onClick={next}>Next ▶</button>
        </div>
      </div>
    </div>
  );
};

export default Project;

