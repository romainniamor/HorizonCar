import { createContext } from "react";
import { MainContextType } from "./MainContextTypes";

const MainContext = createContext<MainContextType>({
  cars: [],
  setCars: () => {},

  newFilter: "",
  setNewFilter: () => {},
  handleSubmit: () => {},
  handleChange: () => {},
  resetFilter: () => {},

  isCollapsed: true,
  setIsCollapsed: () => {},

  carsSelected: [],
  setCarsSelected: () => {},

  handleAddCartoSelection: () => {},
  handleDeleteCarToSelection: () => {},

  isCarSelected: () => false,

  isPanelRightVisible: false,
  setIsPanelRightVisible: () => {},
  handleRightPanel: () => {},

  emptySelection: false,
  setEmptySelection: () => {},

  formIsSubmited: false,
});

export default MainContext;
