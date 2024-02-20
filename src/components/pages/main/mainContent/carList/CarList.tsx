import styled from "styled-components";
import { theme } from "../../../../theme/index";
import { useState } from "react";
import { FAKEPARK } from "../../../../../fakeData/fakePark";

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
          <div className="car-card" key={car.id}>
            <h3>{car.modele}</h3>
            {/* <img src={car.imageSource} alt={car.modele} /> */}
            <p>{car.description}</p>
            <p>{car.price}</p>
            <p>{car.year}</p>
          </div>
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
  .car-card {
    width: 400px;
    height: 480px;
    border-radius: 10px;
    background: blue;
  }
`;
