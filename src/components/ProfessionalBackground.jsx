import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(5deg); }
  50% { transform: translateY(-10px) rotate(-3deg); }
  75% { transform: translateY(-15px) rotate(2deg); }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -10;
  background: linear-gradient(135deg, #ff9a8b 0%, #fecfef 50%, #fecfef 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255, 107, 157, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(196, 69, 105, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(255, 154, 139, 0.1) 0%, transparent 50%);
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.gradient};
  border-radius: 50%;
  opacity: ${props => props.opacity};
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  filter: blur(${props => props.blur}px);
`;

const ProfessionalBackground = () => {
  const shapes = [];
  
  // Generate floating shapes
  for (let i = 0; i < 12; i++) {
    const gradients = [
      'linear-gradient(135deg, rgba(255, 107, 157, 0.3), rgba(196, 69, 105, 0.3))',
      'linear-gradient(135deg, rgba(255, 154, 139, 0.3), rgba(254, 207, 239, 0.3))',
      'linear-gradient(135deg, rgba(168, 237, 234, 0.3), rgba(254, 214, 227, 0.3))'
    ];
    
    shapes.push(
      <FloatingShape
        key={i}
        size={Math.random() * 200 + 50}
        gradient={gradients[Math.floor(Math.random() * gradients.length)]}
        opacity={Math.random() * 0.5 + 0.1}
        duration={Math.random() * 20 + 15}
        delay={Math.random() * 5}
        left={Math.random() * 100}
        top={Math.random() * 100}
        blur={Math.random() * 3 + 1}
      />
    );
  }

  return (
    <BackgroundContainer>
      {shapes}
    </BackgroundContainer>
  );
};

export default ProfessionalBackground;
