import styled from "styled-components";
import { useContext } from "react";
import MainContext from "../../../../../../context/MainContext";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";

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
        icon={isCollapsed ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
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
