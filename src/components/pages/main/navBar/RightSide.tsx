import styled from "styled-components";

import { theme } from "../../../../theme/index";
import { useState } from "react";
import NavIcon from "../../../reusable/NavIcon";

import {
  FaRegUser,
  FaRegHeart,
  FaUserAlt,
  FaHeart,
  FaBell,
  FaRegBell,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function RightSide() {
  const [hoveredIcons, setHoveredIcons] = useState([]);

  /**
   * Array of objects representing icons and their alternative icons.
   * Each object has an `icon` property representing the default icon and an `altIcon` property representing the alternative icon.
   */
  const icons = [
    {
      icon: <FaRegHeart />,
      altIcon: <FaHeart />,
    },
    {
      icon: <FaRegBell />,
      altIcon: <FaBell />,
    },
    {
      icon: <MdOutlineShoppingCart />,
      altIcon: <MdOutlineShoppingCart />,
    },
    {
      icon: <FaRegUser />,
      altIcon: <FaUserAlt />,
    },
  ];

  const handleHover = (index) => {
    console.log(index);
    setHoveredIcons((hoveredIcons) => {
      const updatedHoveredIcons = [...hoveredIcons];
      updatedHoveredIcons[index] = !updatedHoveredIcons[index];
      return updatedHoveredIcons; //return true or false, if true show altIcon else show icon
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
