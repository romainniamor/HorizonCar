import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import TabButton from "./TabButton";

export default function PanelTab() {
  return (
    <PanelTabStyled>
      <TabButton
        onClick={() => console.log("clicked")}
        label={"Choisissez deux voitures à comparer"}
        icon={<FiChevronDown />}
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
