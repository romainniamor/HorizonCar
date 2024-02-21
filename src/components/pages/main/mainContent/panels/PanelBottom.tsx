import styled from "styled-components";
import { theme } from "../../../../../theme/index";

type Props = {};

export default function PanelBottom({}: Props) {
  return <PanelBottomStyled></PanelBottomStyled>;
}

const PanelBottomStyled = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  width: 500px;
  height: 150px;
  /* background-color: yellow; */
  border-top-right-radius: ${theme.borderRadius.round};
  border-top-left-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  padding: 10px;
`;
