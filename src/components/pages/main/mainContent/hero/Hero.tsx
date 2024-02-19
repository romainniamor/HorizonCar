import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { FaMousePointer, FaExchangeAlt, FaCar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Hero() {
  const messagesData = [
    { icon: <FaCar />, label: "rechercher des vehicules" },
    { icon: <FaMousePointer />, label: "sélectionner deux véhicules" },
    { icon: <FaExchangeAlt />, label: "comparer les véhicules" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % messagesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TransitionGroup component={HeroStyled}>
      <CSSTransition
        timeout={3000}
        classNames="item-animated"
        key={currentIndex}
      >
        <div className="hero-item">
          <div className="icon">{messagesData[currentIndex].icon}</div>
          <span className="message">{messagesData[currentIndex].label}</span>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

const HeroStyled = styled.div`
  height: 50px;
  position: relative;
  background-color: ${theme.colors.white};
  overflow: hidden;

  .hero-item {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.S};
    font-weight: ${theme.weights.medium};
    gap: ${theme.spacing.xs};
    height: 100%;
    width: 100%;
  }

  .icon {
    display: flex;
    color: ${theme.colors.primary};
  }

  .message {
    color: ${theme.colors.secondary};
    text-transform: capitalize;
  }

  .item-animated-enter {
    transform: translateY(100%);
  }

  .item-animated-enter-active {
    transform: translateY(0%);
    transition: transform 0.5s ease-in-out;
  }

  .item-animated-exit {
    transform: translateY(0%);
  }

  .item-animated-exit-active {
    transform: translateY(-100%);
    transition: all 0.5s ease-in-out;
  }
`;
