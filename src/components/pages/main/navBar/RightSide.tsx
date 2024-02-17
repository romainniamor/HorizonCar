import styled from "styled-components";
import {
  FaRegUser,
  FaRegHeart,
  FaUserAlt,
  FaHeart,
  FaBell,
  FaRegBell,
} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { theme } from "../../../../theme/index";
import { useState } from "react";

export default function RightSide() {
  const [hoveredIcons, setHoveredIcons] = useState([]);

  const handleHover = (index) => {
    setHoveredIcons((prevHoveredIcons) => {
      const updatedHoveredIcons = [...prevHoveredIcons];
      updatedHoveredIcons[index] = !updatedHoveredIcons[index];
      return updatedHoveredIcons;
    });
  };

  console.log(hoveredIcons);

  const icons = [
    { icon: <FaRegHeart />, altIcon: <FaHeart /> },
    { icon: <FaRegBell />, altIcon: <FaBell /> },
    { icon: <MdOutlineShoppingCart />, altIcon: <MdOutlineShoppingCart /> },
    { icon: <FaRegUser />, altIcon: <FaUserAlt /> },
  ];

  return (
    <RightSideStyled>
      {icons.map((item, index) => (
        <div
          key={index}
          className={`nav-icon ${hoveredIcons[index] ? "hovered" : ""}`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(index)}
        >
          {hoveredIcons[index] ? item.altIcon : item.icon}
        </div>
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

  .nav-icon {
    color: ${theme.colors.white};
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    cursor: not-allowed;

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
    }
  }
`;
