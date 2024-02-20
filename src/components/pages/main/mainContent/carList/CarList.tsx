import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { useState } from "react";
import { FAKEPARK } from "../../../../../fakeData/fakePark";

import PrimaryButton from "../../../../reusable/buttons/PrimaryButton";
import Car from "./Car";

import ToggleButton from "../../../../reusable/buttons/ToggleButton";

type Props = {};

export default function CarList({}: Props) {
  //state
  const [cars, setCars] = useState(FAKEPARK);

  //comportement

  //affichage
  return (
    <CarListStyled>
      {cars.map((car) => {
        return (
          <Car {...car}>
            <ToggleButton isChecked={true} onClick={() => {}} />
            <PrimaryButton label="Voir cette voiture" onClick={() => {}} />
          </Car>
        );
      })}
    </CarListStyled>
  );
}
const CarListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 15px;
  justify-items: center;
  padding-bottom: 80px;
`;
