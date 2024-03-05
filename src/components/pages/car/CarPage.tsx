import styled from "styled-components";
import { theme } from "../../../theme";
import PrimaryButton from "../../reusable/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function CarPage() {
  const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));
  const navigate = useNavigate();

  return (
    <CarPageStyled>
      <div className="content">
        <h2>Connexion ou Inscription</h2>
        <span>Pour continuer et voir les information de la voiture </span>
        <span className="modele">{selectedCar.modele}</span>
        <form>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
        </form>
        <PrimaryButton
          label="Revenir à l'accueil"
          onClick={() => navigate("/")}
        />
      </div>
    </CarPageStyled>
  );
}

const CarPageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_white};
  padding: 20px;
  .content {
    background: ${theme.colors.white};
    padding: 20px;
  }
`;
