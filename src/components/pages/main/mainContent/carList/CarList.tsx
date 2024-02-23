import styled from "styled-components";
import { useState } from "react";
import { FAKEPARK } from "../../../../../fakeData/fakePark";
import PrimaryButton from "../../../../reusable/buttons/PrimaryButton";
import Car from "./Car";
import ToggleButton from "../../../../reusable/buttons/ToggleButton";
import { useContext } from "react";
import MainContext from "../../../../../context/MainContext";

type Props = {};

export default function CarList({}: Props) {
  //state
  const [cars] = useState(FAKEPARK);
  const { isCarSelected, handleAddCartoSelection } = useContext(MainContext);

  //comportement

  //affichage
  return (
    <CarListStyled>
      {cars.map((car) => {
        return (
          <Car {...car} key={car.id}>
            <ToggleButton
              isChecked={!isCarSelected}
              onClick={() => handleAddCartoSelection(car)}
            />
            <PrimaryButton label="Voir cette voiture" onClick={() => {}} />
          </Car>
        );
      })}
    </CarListStyled>
  );
}
const CarListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  width: 100%;
  grid-gap: 15px;
  padding-bottom: 80px;
`;
