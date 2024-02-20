import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { useState } from "react";
import { FAKEPARK } from "../../../../../fakeData/fakePark";
import { GoDotFill } from "react-icons/go";
import { formatedPrice } from "../../../../../utils/math";
import PrimaryButton from "../../../../reusable/buttons/PrimaryButton";

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
          <div className="car-card" key={car.id}>
            <div className="image-preview">
              <img src={car.imageSource} alt={car.modele} />
            </div>
            <div className="card-content">
              <div className="car-info">
                <div className="left">
                  <h3 className="modele">{car.modele}</h3>
                  <p className="description">{car.description}</p>
                  <span className="info">
                    {car.year} <GoDotFill />
                    {car.energy} <GoDotFill />
                    {car.kilometer}
                  </span>
                  <p>{car.gearbox}</p>
                </div>
                <div className="right">
                  <p className="price">{formatedPrice(car.price)}</p>
                </div>
              </div>
              <div className="buttons">
                <ToggleButton isChecked={true} onClick={() => {}} />
                <PrimaryButton label="Voir cette voiture" />
              </div>
            </div>
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
    border-radius: ${theme.borderRadius.round};
    box-sizing: border-box;
    overflow: hidden;
    max-width: 520px;
    max-height: 480px;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 5px;

    &:hover {
      border: 1px solid ${theme.colors.greyLight};
      box-shadow: ${theme.shadows.subtle};
    }
    .image-preview {
      width: 100%;
      border: 1px solid black;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .card-content {
      padding: 0px 10px 20px 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .car-info {
      display: flex;
      justify-content: space-between;
      text-transform: capitalize;
      color: ${theme.colors.greyDark};
      font-size: ${theme.fonts.S};
      font-weight: ${theme.weights.regular};

      .right {
        text-align: right;

        .price {
          color: ${theme.colors.secondary};
          font-size: ${theme.fonts.P1};
          font-weight: ${theme.weights.bold};
        }
      }

      .left {
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-align: left;

        .modele {
          color: ${theme.colors.secondary};
          font-size: ${theme.fonts.P1};
          font-weight: ${theme.weights.bold};
        }
        .description {
        }
        .info {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }
    }
    .buttons {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-column-gap: 10px;
    }

    .check-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: ${theme.borderRadius.round};
      border: 1px solid ${theme.colors.greyLight};
      cursor: pointer;

      &:hover {
        border: 1px solid ${theme.colors.primary};
      }

      .checkbox {
        width: 23px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 23px;
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.greyLight};
      }
      .checked {
        background-color: ${theme.colors.primary};
        width: 100%;
        height: 100%;
      }
    }
  }
`;
