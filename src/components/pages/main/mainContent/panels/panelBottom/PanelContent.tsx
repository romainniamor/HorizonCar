import styled from "styled-components";

export default function PanelContent() {
  return <PanelContentStyled>PanelContent</PanelContentStyled>;
}

const PanelContentStyled = styled.div`
  height: 130px;
  width: 100%;
  border: 2px solid blue;
  padding: 10px;
`;
