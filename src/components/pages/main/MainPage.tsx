import styled from "styled-components";
import { theme } from "../../../theme/index";
import NavBar from "./NavBar";

export default function MainPage() {
  return (
    <MainPageStyled>
      <NavBar />
      <div className="main-content"></div>
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background_white};

  .main-content {
    width: 100%;
    flex: 1;
    background-color: pink;
  }
`;
