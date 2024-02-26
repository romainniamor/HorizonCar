import { styled } from "styled-components";
import Hero from "./hero/Hero";
import { theme } from "../../../../theme/index";
import MainForm from "./form/MainForm";
import CarList from "./carList/CarList";
import PanelBottom from "./panels/panelBottom/PanelBottom";
import { useContext } from "react";
import MainContext from "../../../../context/MainContext";
import PanelRight from "./panels/panelRight/PanelRight";
import { useEffect } from "react";
import { useScrollBlock } from "../../../../utils/window";
import ResultBar from "./ResultBar";
import EmptyList from "./carList/EmptyList";

type Props = {};

export default function MainContent({}: Props) {
  const {
    carsSelected,
    isPanelRightVisible,
    handleSubmit,
    handleChange,
    newFilter,
    resetFilter,
    formIsSubmited,
    cars,
  } = useContext(MainContext);

  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (isPanelRightVisible) {
      blockScroll(); // Bloquer le défilement lorsque le PanelRight est visible
    } else {
      allowScroll(); // Autoriser le défilement lorsque le PanelRight est fermé
    }
  }, [isPanelRightVisible, blockScroll, allowScroll]);

  return (
    <MainContentStyled>
      {isPanelRightVisible && <PanelRight />}
      <Hero />
      <MainForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={newFilter}
        onDelete={resetFilter}
      />
      {formIsSubmited && cars.length && (
        <ResultBar onDelete={resetFilter} value={cars} />
      )}

      {!cars.length && <EmptyList inputValue={newFilter} />}

      {/* {!cars.length && <p>nous n'avons pas trouvé de vehicule</p>} */}

      <CarList />
      {carsSelected.length > 0 && !isPanelRightVisible && <PanelBottom />}
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 100%;
  max-width: 2400px;
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
`;
