import styled from "styled-components";
import Hero from "./hero/Hero";
import { theme } from "../../../../theme/index";
import MainForm from "./form/MainForm";
import CarList from "./carList/CarList";
import PanelBottom from "./panels/panelBottom/PanelBottom";
import { useContext } from "react";
import MainContext from "../../../../context/MainContext";
import PanelRight from "./panels/panelRight/PanelRight";

type Props = {};

export default function MainContent({}: Props) {
  const { carsSelected, isPanelRightVisible } = useContext(MainContext);

  return (
    <MainContentStyled>
      <Hero />
      <MainForm />
      <CarList />
      {carsSelected.length > 0 && !isPanelRightVisible && <PanelBottom />}
      {isPanelRightVisible && <PanelRight />}
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
  position: relative;
`;
