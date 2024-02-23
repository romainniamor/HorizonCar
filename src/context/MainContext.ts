import { createContext } from "react";

export default createContext({
  isCollapsed: true,
  setIsCollapsed: () => {},
  carsSelected: [],
  setCarsSelected: () => {},
  handleAddCartoSelection: () => {},
  isCarSelected: () => {},
});
