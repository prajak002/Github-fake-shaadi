import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import LeavesImg from '../assets/Images/Leaves.png';

// Floating animation keyframes
const float1 = keyframes`
  0% {
    transform: translateY(100vh) translateX(-10px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(100px) rotate(360deg);
    opacity: 0;
  }
`;

const float2 = keyframes`
  0% {
    transform: translateY(100vh) translateX(10px) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(-50px) rotate(-360deg);
    opacity: 0;
  }
`;

const float3 = keyframes`
  0% {
    transform: translateY(100vh) translateX(30px) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(-30px) rotate(180deg);
    opacity: 0;
  }
`;

const sway = keyframes`
  0%, 100% {
    transform: translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateX(10px) rotate(5deg);
  }
  50% {
    transform: translateX(-5px) rotate(-3deg);
  }
  75% {
    transform: translateX(8px) rotate(4deg);
  }
`;

const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const Leaf = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-image: url(${LeavesImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: hue-rotate(${props => props.hue}deg) brightness(${props => props.brightness}) saturate(${props => props.saturation});
  animation: ${props => props.animationType} ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%;
  opacity: 0.6;
`;

const SwayingLeaf = styled(Leaf)`
  animation: ${sway} ${props => props.duration}s ease-in-out infinite;
  position: absolute;
  top: ${props => props.top}%;
  opacity: 0.3;
`;

const FloatingLeaves = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Additional GSAP animations for more dynamic movement
    const leaves = containerRef.current?.querySelectorAll('.gsap-leaf');
    
    if (leaves) {
      leaves.forEach((leaf, index) => {
        gsap.set(leaf, {
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 100,
          rotation: Math.random() * 360,
          scale: Math.random() * 0.5 + 0.5
        });

        gsap.to(leaf, {
          y: -100,
          x: `+=${Math.random() * 200 - 100}`,
          rotation: `+=${Math.random() * 720 - 360}`,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 5,
          repeat: -1,
          ease: "none"
        });
      });
    }
  }, []);

  // Generate random floating leaves (reduced to 2 per second)
  const generateFloatingLeaves = () => {
    const leaves = [];
    const animations = [float1, float2, float3];
    
    for (let i = 0; i < 6; i++) { // Reduced from 15 to 6 leaves
      leaves.push(
        <Leaf
          key={`floating-${i}`}
          size={Math.random() * 30 + 20}
          left={Math.random() * 100}
          animationType={animations[Math.floor(Math.random() * animations.length)]}
          duration={Math.random() * 8 + 12} // Slower animation
          delay={i * 0.5} // Staggered delay for 2 leaves per second
          hue={Math.random() * 60}
          brightness={Math.random() * 0.3 + 0.7}
          saturation={Math.random() * 0.5 + 1}
        />
      );
    }
    
    return leaves;
  };

  // Generate swaying leaves for decorative effect (reduced)
  const generateSwayingLeaves = () => {
    const leaves = [];
    
    for (let i = 0; i < 4; i++) { // Reduced from 8 to 4
      leaves.push(
        <SwayingLeaf
          key={`swaying-${i}`}
          size={Math.random() * 40 + 30}
          left={Math.random() * 100}
          top={Math.random() * 100}
          duration={Math.random() * 3 + 4}
          delay={Math.random() * 2}
          hue={Math.random() * 40}
          brightness={Math.random() * 0.2 + 0.6}
          saturation={Math.random() * 0.3 + 0.8}
        />
      );
    }
    
    return leaves;
  };

  // Generate GSAP controlled leaves (reduced)
  const generateGSAPLeaves = () => {
    const leaves = [];
    
    for (let i = 0; i < 4; i++) { // Reduced from 10 to 4
      leaves.push(
        <div
          key={`gsap-${i}`}
          className="gsap-leaf"
          style={{
            position: 'absolute',
            width: `${Math.random() * 25 + 15}px`,
            height: `${Math.random() * 25 + 15}px`,
            backgroundImage: `url(${LeavesImg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            filter: `hue-rotate(${Math.random() * 80}deg) brightness(${Math.random() * 0.4 + 0.6})`,
            opacity: 0.4
          }}
        />
      );
    }
    
    return leaves;
  };

  return (
    <FloatingContainer ref={containerRef}>
      {generateFloatingLeaves()}
      {generateSwayingLeaves()}
      {generateGSAPLeaves()}
    </FloatingContainer>
  );
};

export default FloatingLeaves;
