import styled from "styled-components";
import PrimaryButton from "../../../../../reusable/buttons/PrimaryButton";
import DeleteButton from "../../../../../reusable/buttons/DeleteButton";
import { theme } from "../../../../../../theme/index";

export default function PanelContent() {
  return (
    <PanelContentStyled>
      <div className="delete-buttons">
        <DeleteButton
          label={"Peugeot 208"}
          onClick={() => {
            alert("suppression de l element");
          }}
        />
        <DeleteButton
          label={"Renault Clio"}
          onClick={() => {
            alert("suppression element");
          }}
        />
      </div>
      <div className="right-panel-button">
        <div className="button-box">
          <PrimaryButton
            label="Comparer les voitures"
            onClick={() => {
              alert("ouverture du right panel");
            }}
          />
        </div>
      </div>
    </PanelContentStyled>
  );
}

const PanelContentStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 10px;
  padding: 0 10px 10px 10px;

  .delete-buttons {
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing.xs};
  }

  .right-panel-button {
    /* background-color: green; */
    display: flex;
    justify-content: center;
    align-items: center;
    .button-box {
      width: 60%;
    }
  }
`;
