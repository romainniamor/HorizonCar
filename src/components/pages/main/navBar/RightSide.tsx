import styled from "styled-components";
import React, { useState } from "react";
import NavIcon from "../../../reusable/NavIcon";
import { theme } from "../../../../theme/index";

import {
  FaRegHeart,
  FaHeart,
  FaRegBell,
  FaBell,
  FaRegUser,
  FaUserAlt,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

type NavIconConfig = {
  icon: React.ReactNode;
  altIcon: React.ReactNode;
};

export default function RightSide() {
  const [hoveredIcons, setHoveredIcons] = useState<boolean[]>([]);

  const icons: NavIconConfig[] = [
    {
      icon: <FaRegHeart />,
      altIcon: <FaHeart />,
    },
    {
      icon: <FaBell />,
      altIcon: <FaRegBell />,
    },
    {
      icon: <MdOutlineShoppingCart />,
      altIcon: <MdOutlineShoppingCart />,
    },
    {
      icon: <FaUserAlt />,
      altIcon: <FaRegUser />,
    },
  ];

  const handleHover = (index: number): void => {
    setHoveredIcons((hoveredIcons) => {
      const updatedHoveredIcons = [...hoveredIcons];
      updatedHoveredIcons[index] = !updatedHoveredIcons[index];
      return updatedHoveredIcons;
    });
  };

  return (
    <RightSideStyled>
      {icons.map((item, index) => (
        <NavIcon
          key={index}
          className={`${hoveredIcons[index] ? "hovered" : ""}`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(index)}
          icon={hoveredIcons[index] ? item.altIcon : item.icon}
        />
      ))}
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  font-size: ${theme.fonts.P3};
  background-color: transparent;
  height: 100%;
  margin-right: 20px;
`;
