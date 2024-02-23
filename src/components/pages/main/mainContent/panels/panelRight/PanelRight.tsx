import styled from "styled-components";
import { theme } from "../../../../../../theme/index";

export default function PanelRight() {
  return (
    <PanelRightStyled>
      <div className="box"></div>
    </PanelRightStyled>
  );
}

const PanelRightStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(74, 74, 74, 0.4);
  display: flex;
  justify-content: flex-end;
  z-index: 5;
  position: absolute;
  right: 0;

  .box {
    width: 500px;
    min-width: 350px;
    height: 100%;
    position: sticky;
    z-index: 10;
    background: white;
    right: 0;
    top: 0;
  }
`;
