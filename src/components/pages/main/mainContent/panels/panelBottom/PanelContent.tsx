import styled from "styled-components";
import PrimaryButton from "../../../../../reusable/buttons/PrimaryButton";

export default function PanelContent() {
  return (
    <PanelContentStyled>
      <div className="delete-buttons"></div>
      <div className="right-panel-button">
        <div className="button-box">
          <PrimaryButton
            label="Comparer les voitures"
            onClick={() => {
              alert("comarer les voitures");
            }}
          />
        </div>
      </div>
    </PanelContentStyled>
  );
}

const PanelContentStyled = styled.div`
  height: 130px;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding: 10px;

  .delete-buttons {
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-panel-button {
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    .button-box {
      width: 60%;
    }
  }
`;
