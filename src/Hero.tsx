import type { FC, PropsWithChildren } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './index.css'

const Hero: FC = () => {
 // useSpring returns animated style values — here we fade in and slide up slightly
  const fadeIn = useSpring({
    from: { opacity: 0, y: -20 }, // Start transparent and shifted up
    to: { opacity: 1, y: 0 },     // Animate to fully visible and original position
    delay: 200,                   // Start animation after 200ms
  });

  /**
   * TypeScript Fix:
   * react-spring's `animated.div` doesn't automatically know it accepts `children`,
   * so we explicitly cast it as a React Functional Component (FC) that:
   *  - Accepts children (PropsWithChildren)
   *  - Accepts `style` (required for animation)
   *  - Optionally accepts `className`**/

  const AnimatedDiv = animated.div as FC<PropsWithChildren<{ style: any; className?: string }>>;
  

  return (
    <AnimatedDiv className="hero" style={fadeIn}>
      <img src="./src/assets/aimee.jpg" alt="Aimee Ramirez" className="hero-img" />
      <h1>Hi, I'm Aimee</h1>
      <p>Frontend/API Developer | Digital Creator</p>
    </AnimatedDiv>
  );
};

export default Hero;
