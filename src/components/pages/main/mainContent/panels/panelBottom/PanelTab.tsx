import styled from "styled-components";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { useContext } from "react";
import MainContext from "../../../../../../context/MainContext";

import TabButton from "./TabButton";

export default function PanelTab() {
  const { isCollapsed, setIsCollapsed, carsSelected } = useContext(MainContext);

  return (
    <PanelTabStyled>
      <TabButton
        onClick={() => setIsCollapsed(!isCollapsed)}
        label={
          isCollapsed
            ? `Afficher pour comparer: voitures selectionnées ${carsSelected.length}/2 `
            : "Choisissez deux voitures à comparer"
        }
        icon={isCollapsed ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
      />
    </PanelTabStyled>
  );
}

const PanelTabStyled = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
