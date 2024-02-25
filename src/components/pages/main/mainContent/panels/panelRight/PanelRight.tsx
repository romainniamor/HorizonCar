import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import PrimaryButton from "../../../../../reusable/buttons/PrimaryButton";
import PanelRightTitleTag from "./PanelRightTitleTag";

import { useContext } from "react";
import MainContext from "../../../../../../context/MainContext";

export default function PanelRight() {
  const { carsSelected, isPanelRightVisible, setIsPanelRightVisible } =
    useContext(MainContext);
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
              <span className="car-modele">{carsSelected[0].modele}</span>
              <span className="car-modele">{carsSelected[1].modele}</span>
            </div>
          </div>
          <div className="header">
            <div className="section-image">
              <img
                src={carsSelected[0].imageSource}
                alt={carsSelected[0].modele}
              />
              <img
                src={carsSelected[1].imageSource}
                alt={carsSelected[1].modele}
              />
            </div>

            <div className="section-info">
              <div className="label">Version</div>
              <div className="car-infos">
                <span className="car-data">{carsSelected[0].description}</span>
                <span className="car-data">{carsSelected[1].description}</span>
              </div>
            </div>
            <div className="section-info">
              <div className="label">Prix</div>
              <div className="car-infos">
                <span className="car-data">{carsSelected[0].price} €</span>
                <span className="car-data">{carsSelected[1].price}€</span>
              </div>
            </div>
            <div className="section-info">
              <div className="label">Première Immatriculation</div>
              <div className="car-infos">
                <span className="car-data">{carsSelected[0].year}</span>
                <span className="car-data">{carsSelected[1].year}</span>
              </div>
            </div>

            <div className="section-info">
              <div className="label">Kilométrage</div>
              <div className="car-infos">
                <span className="car-data">{carsSelected[0].kilometer} km</span>
                <span className="car-data">{carsSelected[1].kilometer} km</span>
              </div>
            </div>
            <div className="section-info">
              <div className="label">Carburant</div>
              <div className="car-infos">
                <span className="car-data">{carsSelected[0].energy}</span>
                <span className="car-data">{carsSelected[1].energy}</span>
              </div>
            </div>
            <div className="section-info">
              <div className="label">Catégorie</div>
              <div className="car-infos">
                <span className="car-data">{carsSelected[0].category}</span>
                <span className="car-data">{carsSelected[1].category}</span>
              </div>
            </div>
            <div className="section-info">
              <div className="label">Transmission</div>
              <div className="car-infos">
                <span className="car-data">{carsSelected[0].gearbox}</span>
                <span className="car-data">{carsSelected[1].gearbox}</span>
              </div>
            </div>
          </div>
          <div className="footer">
            <PrimaryButton label="Voir la voiture" />
            <PrimaryButton label="Voir la voiture" />
          </div>
        </div>
      </div>
    </PanelRightStyled>
  );
}

const PanelRightStyled = styled.div`
  height: 100%;
  .overlay {
    width: 100vw;
    height: 100%;
    background-color: ${theme.colors.dark};
    z-index: 5;
    position: fixed;
    left: 0;
    top: 0;
    opacity: 0.3;
  }

  .panel {
    width: 500px;
    min-width: 350px;

    position: fixed;
    z-index: 10;
    background: ${theme.colors.white};
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    z-index: 100;

    .comparison {
      display: grid;
      height: 100%;
      overflow-y: scroll;
      grid-template-rows: 30px 1fr 70px;
      grid-row-gap: 10px;
      padding: 15px;
      border: 4px solid orange;
      .top {
        display: flex;
        gap: 10px;
        border: 1px solid blue;
        .section-title {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          background: green;
          .car-modele {
            width: 50%;
            background: pink;
            font-weight: ${theme.weights.semiBold};
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
        border: 1px solid red;
        gap: 10px;
        height: 100%;
        overflow-y: scroll; // Use overflow-y: auto for scroll functionality
        width: 100%;

        img {
          width: 50%;
          height: auto;
          object-fit: cover;
          border: 1px solid blue;
        }

        .section-info {
          width: 100%;
          height: auto;
          margin: 10px 0;
          .label {
            font-weight: ${theme.weights.semiBold};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.P1};
          }
          .car-infos {
            display: flex;
            width: 100%;
            gap: 10px;

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
            }
          }
        }
      }
      .footer {
        display: flex;
        border: 3px solid green;
        gap: 10px;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        border-top: 4px solid purple;
        padding: 10px 0;
      }
    }
  }
`;
