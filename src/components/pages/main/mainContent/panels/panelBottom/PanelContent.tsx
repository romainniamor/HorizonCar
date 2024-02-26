import styled from "styled-components";
import PrimaryButton from "../../../../../reusable/buttons/PrimaryButton";
import DeleteButton from "../../../../../reusable/buttons/DeleteButton";
import { theme } from "../../../../../../theme/index";
import { useContext } from "react";
import MainContext from "../../../../../../context/MainContext";

export default function PanelContent() {
  const { carsSelected, handleDeleteCarToSelection, handleRightPanel } =
    useContext(MainContext);

  return (
    <PanelContentStyled>
      <div className="delete-buttons">
        {carsSelected.map((car) => (
          <DeleteButton
            key={car.id}
            label={car.modele}
            onClick={() => handleDeleteCarToSelection(car.id)}
          />
        ))}
      </div>
      <div className="right-panel-button">
        <div className="button-box">
          <PrimaryButton
            className={carsSelected.length < 2 ? "disabled" : ""}
            label="Comparer les voitures"
            onClick={handleRightPanel}
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

  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
