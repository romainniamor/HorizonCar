import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { FaMousePointer, FaExchangeAlt, FaCar } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    { icon: <FaCar />, label: "rechercher des vehicules" },
    { icon: <FaMousePointer />, label: "sélectionner deux véhicules" },
    { icon: <FaExchangeAlt />, label: "comparer les véhicules" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % messages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroStyled>
      <div className="hero-item">
        <div className="icon">{messages[currentIndex].icon}</div>
        <span className="message">{messages[currentIndex].label}</span>
      </div>
    </HeroStyled>
  );
}

const HeroStyled = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
  .hero-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.S};
    font-weight: ${theme.weights.medium};
    gap: ${theme.spacing.xs};
    line-height: 1.5;
    overflow: hidden;
    background: red;

    transition: all 0.5s ease;

    .icon {
      display: flex;
      color: ${theme.colors.primary};
    }

    .message {
      color: ${theme.colors.secondary};
      text-transform: capitalize;
    }
  }
`;
