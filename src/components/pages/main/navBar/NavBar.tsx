import styled from "styled-components";
import RightSide from "./RightSide";
import Logo from "../../../reusable/Logo";
import { theme } from "../../../../theme/index";

export default function NavBar() {
  return (
    <NavBarStyled>
      <Logo />
      <RightSide />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
