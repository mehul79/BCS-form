import React, { useState } from 'react';
import styled from 'styled-components';

const TextBlockContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const TextBlockText = styled.h1`
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const TextBlock = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <TextBlockContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TextBlockText>{hovered ? 'Hovered!' : 'Hello'}</TextBlockText>
    </TextBlockContainer>
  );
};