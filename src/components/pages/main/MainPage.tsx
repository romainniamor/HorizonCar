import styled from "styled-components";
import { theme } from "../../../theme/index";
import NavBar from "./navBar/NavBar";
import MainContent from "./mainContent/MainContent";
import MainContext from "../../../context/MainContext";
import { useState } from "react";

export default function MainPage() {
  const [isCarSelected, setIsCarSelected] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [carsSelected, setCarsSelected] = useState([]);

  const handleAddCartoSelection = (car) => {
    if (carsSelected.length < 2) {
      setCarsSelected([...carsSelected, car]);
      setIsCarSelected(!isCarSelected);
      setIsCollapsed(false);
    }
  };

  const handleDeleteCarToSelection = (id) => {
    setCarsSelected([...carsSelected].filter((car) => car.id !== id));
  };

  const mainContextValue = {
    isCarSelected,
    setIsCarSelected,
    isCollapsed,
    setIsCollapsed,
    carsSelected,
    setCarsSelected,
    handleAddCartoSelection,
    handleDeleteCarToSelection,
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.background_white};
`;
