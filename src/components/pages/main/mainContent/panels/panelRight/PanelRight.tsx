import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import PrimaryButton from "../../../../../reusable/buttons/PrimaryButton";
import PanelRightTitleTag from "./PanelRightTitleTag";
import { getCarsInfos } from "./carsInfosConfig";
import { useContext } from "react";
import MainContext from "../../../../../../context/MainContext";
import { slideIn } from "../../../../../../theme/animations";
import { CarType } from "../../../../../../types";

export default function PanelRight() {
  const {
    carsSelected,
    isPanelRightVisible,
    setIsPanelRightVisible,
    handleViewCar,
  } = useContext(MainContext);

  const carsInfos = getCarsInfos(carsSelected);

  return (
    <PanelRightStyled>
      <div
        className="overlay"
        onClick={() => setIsPanelRightVisible(!isPanelRightVisible)}
      ></div>

      <div className="panel">
        <PanelRightTitleTag
          onClick={() => setIsPanelRightVisible(!isPanelRightVisible)}
        />
        <div className="comparison">
          <div className="top">
            <div className="section-title">
              {carsSelected.map((car: CarType) => (
                <span className="car-modele">{car.modele}</span>
              ))}
            </div>
          </div>
          <div className="header">
            <div className="section-image">
              {carsSelected.map((car: CarType) => (
                <img key={car.id} src={car.imageSource[0]} alt={car.modele} />
              ))}
            </div>

            <div className="section-info">
              {carsInfos.map((info, index) => (
                <div key={index} className="label">
                  {info.label}
                  {info.component}
                </div>
              ))}
            </div>
          </div>
          <div className="footer">
            {carsSelected.map((car: CarType) => (
              <PrimaryButton
                key={car.id}
                onClick={() => handleViewCar(car.id)}
                label="Voir la voiture"
              />
            ))}
          </div>
        </div>
      </div>
    </PanelRightStyled>
  );
}

const PanelRightStyled = styled.div`
  .overlay {
    width: 100vw;
    height: 100%;
    background-color: rgba(26, 26, 26, 0.5);
    z-index: 5;
    position: absolute;
    left: 0;
    top: 50px;
  }

  .panel {
    width: 500px;
    min-width: 350px;
    top: 50px;
    position: fixed;
    z-index: 10;
    background: ${theme.colors.white};
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    z-index: 100;
    animation: ${slideIn} 0.3s ease-in-out;

    .comparison {
      display: grid;
      overflow-y: scroll;
      grid-template-rows: 30px 1fr 70px;
      grid-row-gap: 10px;
      padding: 15px 20px;
      .top {
        display: flex;
        gap: 10px;
        .section-title {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 20px;

          .car-modele {
            width: 50%;
            font-weight: ${theme.weights.bold};
            font-size: ${theme.fonts.P1};
            color: ${theme.colors.secondary};
            text-transform: capitalize;
            padding: 10px 0;
          }
        }
      }
      .header {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        overflow-y: scroll;
        width: 100%;

        img {
          width: 50%;
          height: auto;
          object-fit: cover;
        }

        .section-info {
          width: 100%;
          height: auto;
          margin: 10px 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          .label {
            font-weight: ${theme.weights.semiBold};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.P1};
            text-transform: capitalize;
          }
          .car-info {
            display: flex;
            width: 100%;
            gap: 20px;

            .car-data {
              width: 50%;
              height: auto;
              border-bottom: 1px solid ${theme.colors.greyLight};
              padding: 15px 0;
              word-wrap: break-word;
              font-size: ${theme.fonts.P0};
              color: ${theme.colors.dark};
              font-weight: ${theme.weights.regular};
              line-height: 1.5;
              text-transform: capitalize;
            }
          }
        }
      }
    }
    .footer {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      padding: 10px 0;
    }
  }
`;
