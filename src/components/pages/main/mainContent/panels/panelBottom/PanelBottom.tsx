import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import PanelTab from "./PanelTab";
import PanelContent from "./PanelContent";
import { useState } from "react";

type Props = {};

export default function PanelBottom({}: Props) {
  return (
    <PanelBottomStyled>
      <PanelTab />
      <PanelContent />
    </PanelBottomStyled>
  );
}

const PanelBottomStyled = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  width: 500px;
  background-color: yellow;
  border-top-right-radius: ${theme.borderRadius.round};
  border-top-left-radius: ${theme.borderRadius.round};
  /* background-color: ${theme.colors.white}; */
  overflow: hidden;
`;
