import styled from "styled-components";
import { ReactNode } from "react";
import NavIcon from "../../../reusable/NavIcon";
import { theme } from "../../../../theme/index";

import { FaRegHeart, FaRegBell, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function RightSide() {
  const icons: ReactNode[] = [
    <FaRegHeart />,
    <FaRegBell />,
    <MdOutlineShoppingCart />,
    <FaRegUser />,
  ];

  return (
    <RightSideStyled>
      {icons.map((item, index) => (
        <NavIcon key={index} icon={item} />
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
