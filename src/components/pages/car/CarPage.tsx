import styled from "styled-components";
import { theme } from "../../../theme";
import PrimaryButton from "../../reusable/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import Title from "../../reusable/Title";

export default function CarPage() {
  const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));

  return (
    <CarPageStyled>
      <div className="content">
        <div className="box">
          <Title label={"Connexion ou Inscription"} />
          <div className="text">
            <span>
              Veuillez entrer votre email pour continuer et voir les
              informations de la voiture
            </span>
            <span className="modele">{selectedCar.modele}.</span>
          </div>

          <form>
            <label htmlFor="email">Email</label>
            <div className="text-input">
              <input
                type="text"
                placeholder="exemple@exemple.com"
                className="input"
              />
            </div>
            <div className="button">
              <PrimaryButton
                label="Suivant"
                onClick={(e) => e.preventDefault()}
              />
            </div>
          </form>
          <Link className="link" to="/">
            Revenir à l'accueil
          </Link>
        </div>
      </div>
    </CarPageStyled>
  );
}

const CarPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_white};
  padding: 20px;
  .content {
    background: ${theme.colors.white};
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;

    .box {
      width: 480px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;

      .text {
        font-size: ${theme.fonts.P0};
        font-weight: ${theme.weights.medium};
        color: ${theme.colors.dark};
        gap: 10px;

        .modele {
          margin-left: ${theme.spacing.xxs};
          text-transform: capitalize;
        }
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;

        .button {
          display: flex;
          justify-content: center;
        }

        label {
          font-weight: ${theme.weights.bold};
          text-align: left;
        }
        .text-input {
          border-radius: ${theme.borderRadius.round};
          display: flex;
          align-items: center;
          gap: ${theme.spacing.xs};
          padding: 8px 15px;
          color: ${theme.colors.greyLight};
          border: 1px solid ${theme.colors.greyLight};
          background-color: ${theme.colors.white};
          width: 70%;
          transition: all 0.2s ease-in-out;
          width: 100%;
          margin-bottom: 20px;

          &:hover {
            border: 1px solid ${theme.colors.primary};
          }

          input {
            border: none;
            width: 100%;
            background: ${theme.colors.white};
            color: ${theme.colors.dark};
            font-size: ${theme.fonts.P0};

            &::placeholder {
              color: ${theme.colors.greyMedium};
            }
            &:focus {
              outline: 0px;
            }
          }
        }
      }
      .link {
        color: ${theme.colors.secondary};

        font-size: ${theme.fonts.P0};
      }
    }
  }
`;
