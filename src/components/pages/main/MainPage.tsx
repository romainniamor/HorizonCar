import styled from "styled-components";
import { theme } from "../../../theme/index";
import NavBar from "./navBar/NavBar";
import MainContent from "./mainContent/MainContent";
import MainContext from "../../../context/MainContext";
import { useState } from "react";
import { FAKEPARK } from "../../../fakeData/fakePark";
import { CarType } from "../../../types";

export default function MainPage() {
  //states

  const [cars, setCars] = useState<CarType[]>(FAKEPARK);
  const [carsSelected, setCarsSelected] = useState<CarType[]>([]);
  const [newFilter, setNewFilter] = useState<string>("");
  const [isPanelRightVisible, setIsPanelRightVisible] =
    useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [formIsSubmited, setFormIsSubmited] = useState<boolean>(false);
  const [emptySelection, setEmptySelection] = useState<boolean>(false);

  const handleDeleteCarToSelection = (id: string) => {
    setCarsSelected([...carsSelected].filter((car) => car.id !== id));
  };

  //comportements

  const handleAddCartoSelection = (car: CarType) => {
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
    return carsSelected.find((car: CarType) => car.id === id) !== undefined;
  };

  const handleRightPanel = () => {
    setIsPanelRightVisible(!isPanelRightVisible);
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (newFilter) {
      e.preventDefault();
      const copyCars = [...cars];
      const updatedCars = copyCars.filter((car) =>
        car.modele.toLowerCase().includes(newFilter.toLowerCase())
      );

      if (!updatedCars.length) {
        setEmptySelection(true);
        setFormIsSubmited(false);
        setCars(FAKEPARK);
      } else {
        setEmptySelection(false);
        setFormIsSubmited(true);
        setCars(updatedCars);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilter(e.target.value);
  };

  const resetFilter = () => {
    setNewFilter("");
    setFormIsSubmited(false);
    setCars(FAKEPARK);
    setEmptySelection(false);
  };

  //context value
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
    emptySelection,
    setEmptySelection,
  };

  //affichage
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
