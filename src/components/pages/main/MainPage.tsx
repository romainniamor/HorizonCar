import styled from "styled-components";
import { theme } from "../../../theme/index";
import { useParams } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import MainContent from "./mainContent/MainContent";

export default function MainPage() {
  const { userName } = useParams();

  return (
    <MainPageStyled>
      <NavBar userName={userName} />
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
