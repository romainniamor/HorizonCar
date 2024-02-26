import styled from "styled-components";
import { useState } from "react";
import PrimaryButton from "../../../../reusable/buttons/PrimaryButton";
import Car from "./Car";
import ToggleButton from "../../../../reusable/buttons/ToggleButton";
import { useContext } from "react";
import MainContext from "../../../../../context/MainContext";

type Props = {};

export default function CarList({}: Props) {
  //state
  const { handleAddCartoSelection, isCarSelected, cars } =
    useContext(MainContext);

  //affichage
  return (
    <CarListStyled>
      {cars.map((car) => {
        return (
          <Car {...car} key={car.id}>
            <ToggleButton
              isChecked={isCarSelected(car.id)}
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
  padding: 0px 30px 170px 30px;
`;
