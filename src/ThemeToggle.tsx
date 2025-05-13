import type { FC } from 'react';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ThemeToggleProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeToggle: FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle">
     {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </button>
  );
};

export default ThemeToggle;
