import styled from "styled-components";
import Hero from "./hero/Hero";
import { theme } from "../../../../theme/index";
import MainForm from "./form/MainForm";
import CarList from "./carList/CarList";

type Props = {};

export default function MainContent({}: Props) {
  return (
    <MainContentStyled>
      <Hero />
      <MainForm />
      <CarList />
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  width: 100%;
  max-width: 2400px;
  padding: 0 15px;
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: calc(100vh - 50px);
  height: auto;
`;
