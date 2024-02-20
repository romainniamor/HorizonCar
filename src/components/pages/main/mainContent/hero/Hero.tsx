import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { FaMousePointer, FaExchangeAlt, FaCar } from "react-icons/fa";
import { Md360 } from "react-icons/md";
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HeroItem from "./HeroItem";

export default function Hero() {
  const messagesData = [
    { icon: <FaCar />, label: "Rechercher le véhicule de votre choix" },
    { icon: <Md360 />, label: "Vue à 360° des véhicules" },
    { icon: <FaMousePointer />, label: "Sélectionner deux véhicules" },
    {
      icon: <FaExchangeAlt />,
      label: "Comparer",
    },
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
        <HeroItem
          label={messagesData[currentIndex].label}
          icon={messagesData[currentIndex].icon}
        />
      </CSSTransition>
    </TransitionGroup>
  );
}

const HeroStyled = styled.div`
  height: 50px;
  position: relative;
  background-color: ${theme.colors.white};
  overflow: hidden;

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
