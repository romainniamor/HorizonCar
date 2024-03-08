import styled from "styled-components";
import { theme } from "../../../theme";
import PrimaryButton from "../../reusable/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import Title from "../../reusable/Title";
import TextInput from "../../reusable/TextInput";

export default function CarPage() {
  const selectedCarJSON = localStorage.getItem("selectedCar");
  const selectedCar = selectedCarJSON ? JSON.parse(selectedCarJSON) : null;

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

            <TextInput placeholder={"exemple@exemple.com"} />

            <div className="button">
              <PrimaryButton label="Suivant" onClick={() => {}} />
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
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_white};
  padding: 30px;
  .content {
    background: ${theme.colors.white};
    width: 100%;
    height: 100%;
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
          margin: ${theme.spacing.md};
        }

        label {
          font-weight: ${theme.weights.bold};
          text-align: left;
          margin-bottom: ${theme.spacing.xxs};
        }
      }
      .link {
        color: ${theme.colors.secondary};
        font-size: ${theme.fonts.P0};
      }
    }
  }
`;
