import styled from "styled-components";
import { theme } from "../../../theme/index";
import NavBar from "./navBar/NavBar";
import MainContent from "./mainContent/MainContent";
import MainContext from "../../../context/MainContext";
import { useState } from "react";

export default function MainPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [carsSelected, setCarsSelected] = useState([]);
  const [isPanelRightVisible, setIsPanelRightVisible] = useState(false);

  const handleDeleteCarToSelection = (id) => {
    setCarsSelected([...carsSelected].filter((car) => car.id !== id));
  };

  const handleAddCartoSelection = (car) => {
    if (carsSelected.length < 2) {
      if (!carsSelected.find((carSelected) => carSelected.id === car.id)) {
        setCarsSelected([...carsSelected, car]);
        setIsCollapsed(false);
      }
    }
    if (carsSelected.find((carSelected) => carSelected.id === car.id)) {
      handleDeleteCarToSelection(car.id);
    }
  };

  const isCarSelected = (id: string): boolean => {
    return carsSelected.find((car) => car.id === id) !== undefined;
  };

  const handleRightPanel = () => {
    setIsPanelRightVisible(!isPanelRightVisible);
  };

  const mainContextValue = {
    isCollapsed,
    setIsCollapsed,
    carsSelected,
    setCarsSelected,
    handleAddCartoSelection,
    handleDeleteCarToSelection,
    isCarSelected,
    isPanelRightVisible,
    setIsPanelRightVisible,
    handleRightPanel,
  };

  return (
    <MainContext.Provider value={mainContextValue}>
      <MainPageStyled>
        <NavBar />
        <MainContent />
      </MainPageStyled>
    </MainContext.Provider>
  );
}

const MainPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.background_white};
  position: relative;
`;
