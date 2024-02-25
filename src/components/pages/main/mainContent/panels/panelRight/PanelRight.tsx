import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import PrimaryButton from "../../../../../reusable/buttons/PrimaryButton";
import PanelRightTitleTag from "./PanelRightTitleTag";
import { getCarsInfos } from "./carsInfosConfig";

import { useContext } from "react";
import MainContext from "../../../../../../context/MainContext";

export default function PanelRight() {
  const { carsSelected, isPanelRightVisible, setIsPanelRightVisible } =
    useContext(MainContext);

  const CARSINFOS = getCarsInfos(carsSelected);

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
              {carsSelected.map((car) => (
                <span className="car-modele">{car.modele}</span>
              ))}
            </div>
          </div>
          <div className="header">
            <div className="section-image">
              {carsSelected.map((car) => (
                <img src={car.imageSource} alt={car.modele} />
              ))}
            </div>

            <div className="section-info">
              {CARSINFOS.map((info) => (
                <div key={info.id} className="label">
                  {info.label}
                  {info.component}
                </div>
              ))}
            </div>
          </div>
          <div className="footer">
            {carsSelected.map((car) => (
              <PrimaryButton key={car.id} label="Voir la voiture" />
            ))}
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
              text-transform: capitalize;
            }
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
`;
