import styled from "styled-components";
import { theme } from "../../../theme/index";
import NavBar from "./navBar/NavBar";
import MainContent from "./mainContent/MainContent";

export default function MainPage() {
  return (
    <MainPageStyled>
      <NavBar />
      <MainContent />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.background_white};
`;
