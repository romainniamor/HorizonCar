import styled from "styled-components";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

import { useState } from "react";

import TabButton from "./TabButton";

export default function PanelTab() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <PanelTabStyled>
      <TabButton
        onClick={() => setIsCollapsed(!isCollapsed)}
        label={
          isCollapsed
            ? "Choisissez deux voitures à comparer"
            : "Afficher pour comparer: voitures selectionnées"
        }
        icon={isCollapsed ? <FaChevronCircleDown /> : <FaChevronCircleUp />}
      />
    </PanelTabStyled>
  );
}

const PanelTabStyled = styled.div`
  width: 100%;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
