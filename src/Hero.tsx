import type { FC, PropsWithChildren } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './index.css';

const AnimatedDiv = animated.div as FC<PropsWithChildren<{ style: any; className?: string }>>;

const Hero: FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 170, friction: 26 },
    delay: 200,
  });

  return (
    <AnimatedDiv className="hero" style={fadeIn}>
      {/* Optional image */}
      {/* <img src="/aimee.jpg" alt="Aimee Ramirez" className="hero-img" /> */}
      <p>Welcome in.</p>
      <h1>Hi, I'm Aimee</h1>
      <p>Frontend/API Developer | Digital Creator</p>
    </AnimatedDiv>
  );
};

export default Hero;
