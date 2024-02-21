import { createContext } from "react";

export default createContext({
  isCarSelect: false,
  setIsCarSelect: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
});
