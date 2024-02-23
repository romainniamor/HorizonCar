import { createContext } from "react";

export default createContext({
  isCarSelected: false,
  setIsCarSeleced: () => {},
  isCollapsed: true,
  setIsCollapsed: () => {},
  carsSelected: [],
  setCarsSelected: () => {},
});
