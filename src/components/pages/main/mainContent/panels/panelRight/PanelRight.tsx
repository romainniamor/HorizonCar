import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import { RxCross2 } from "react-icons/rx";

import { useContext } from "react";
import MainContext from "../../../../../../context/MainContext";

export default function PanelRight() {
  const { isPanelRightVisible, setIsPanelRightVisible } =
    useContext(MainContext);
  return (
    <PanelRightStyled>
      <div className="panel-right-content">
        <div className="title">
          <span className="label"> Comparer les voitures</span>
          <div
            className="icon"
            onClick={() => setIsPanelRightVisible(!isPanelRightVisible)}
          >
            <RxCross2 />
          </div>
        </div>
        <div className="comparison"></div>
      </div>
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

  .panel-right-content {
    width: 500px;
    min-width: 350px;
    height: 100%;
    position: sticky;
    z-index: 10;
    background: white;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;

    .title {
      padding: 15px;
      font-size: ${theme.fonts.P1};
      border-bottom: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};
      font-weight: ${theme.weights.semiBold};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.colors.secondary};
      position: relative;
      .icon {
        position: absolute;
        right: 25px;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);
        font-size: ${theme.fonts.P2};
        color: ${theme.colors.secondary};
      }
    }
  }
`;
