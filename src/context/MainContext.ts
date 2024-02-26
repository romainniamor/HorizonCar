import { createContext } from "react";

export default createContext({
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
  isCarSelected: () => {},
  isPanelRightVisible: false,
  setIsPanelRightVisible: () => {},
  handleRightPanel: () => {},
});
