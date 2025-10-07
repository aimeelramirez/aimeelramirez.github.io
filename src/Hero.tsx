import type { FC, PropsWithChildren } from 'react';
import { useSpring, animated, type UseSpringProps } from '@react-spring/web';
import './index.css'; // Make sure styles are scoped here or global

const AnimatedDiv = animated.div as FC<PropsWithChildren<{ style?: UseSpringProps; className?: string }>>;

const Hero: FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 170, friction: 26 },
    delay: 200,
  });

  return (
    <AnimatedDiv className="hero" style={fadeIn}>
      <div className="hero-left">
        <img src="/aimee.jpg" alt="Aimee Ramirez" className="hero-img" />
      </div>
      <div className="hero-right">
        <p>Welcome in.</p>
        <h1>Hi, I'm Aimee</h1>
        <p>Frontend/API Developer | Digital Creator</p>
      </div>
    </AnimatedDiv>
  );
};

export default Hero;