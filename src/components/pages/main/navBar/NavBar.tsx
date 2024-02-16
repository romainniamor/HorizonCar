import styled from "styled-components";
import RightSide from "./RightSide";

type NavBarProps = {
  userName: string;
};

export default function NavBar({ userName }: NavBarProps) {
  return (
    <NavBarStyled>
      <p>logo</p>
      <RightSide userName={userName} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  height: 80px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
