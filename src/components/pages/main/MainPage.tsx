import styled from "styled-components";
import { theme } from "../../../theme/index";
import NavBar from "./navBar/NavBar";
import MainContent from "./mainContent/MainContent";
import MainContext from "../../../context/MainContext";
import { useState } from "react";
import { FAKEPARK } from "../../../fakeData/fakePark";

export default function MainPage() {
  const [cars, setCars] = useState(FAKEPARK);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [carsSelected, setCarsSelected] = useState([]);
  const [isPanelRightVisible, setIsPanelRightVisible] = useState(false);
  const [newFilter, setNewFilter] = useState("");
  const [formIsSubmited, setFormIsSubmited] = useState(false);

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

  const handleSubmit = (e) => {
    if (newFilter) {
      e.preventDefault();

      const copyCars = [...cars];
      console.log("copyCars", copyCars);
      const updatedCars = copyCars.filter((car) =>
        car.modele.toLowerCase().includes(newFilter.toLowerCase())
      );
      setFormIsSubmited(true);
      setCars(updatedCars);
    }
  };

  const handleChange = (e) => {
    setNewFilter(e.target.value);
  };

  const resetFilter = () => {
    setNewFilter("");
    setFormIsSubmited(false);
    setCars(FAKEPARK);
  };

  const mainContextValue = {
    cars,
    setCars,
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
    handleChange,
    handleSubmit,
    resetFilter,
    newFilter,
    setNewFilter,
    formIsSubmited,
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
