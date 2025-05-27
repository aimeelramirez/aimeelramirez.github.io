// src/components/AppLayout.tsx
import { type FC, useEffect, type PropsWithChildren } from 'react';
import { useSpring, animated } from '@react-spring/web';
import ThemeToggle from '../context/ThemeToggle';
import Footer from '../Footer'; // ✅ Add footer here
import { useTheme } from '../context/ThemeContext';

const AnimatedDiv: FC<PropsWithChildren<{ style: any; className?: string }>> = animated.div;
const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.style.background = theme === 'dark' ? '#1e2326' : '#fff';
    const root = document.getElementById('root');
    if (root) root.style.background = theme === 'dark' ? '#1e2326' : '#fff';

    document.querySelectorAll('article').forEach((item) => {
      item.style.background = theme === 'dark' ? '#1e2326' : '#fff';
      item.style.color = theme === 'dark' ? '#fff' : '#1e2326';
    });

    document.querySelectorAll('p').forEach((item) => {
      item.style.color = theme === 'dark' ? '#fff' : '#1e2326';
    });

    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const themeTransition = useSpring({
    backgroundColor: theme === 'dark' ? '#1e2326' : '#ffffff',
    color: theme === 'dark' ? '#eeeeee' : '#333333',
    config: { tension: 170, friction: 26 },
  });

  return (
    <AnimatedDiv style={themeTransition} className="app-container">
      <div className="theme-toggle">
        <ThemeToggle />
      </div>
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </AnimatedDiv>
  );
};

export default AppLayout;
