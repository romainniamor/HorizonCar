import styled from "styled-components";
import { theme } from "../../../theme/index";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

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
  background-color: ${theme.colors.background_white};
`;
