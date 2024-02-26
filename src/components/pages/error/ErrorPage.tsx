import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import PrimaryButton from "../../reusable/buttons/PrimaryButton";
import { FaChevronCircleRight } from "react-icons/fa";

type Props = {};

export default function ErrorPage({}: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <ErrorPageStyled>
      <div className="content">
        <div className="error-page-image">
          <img
            src="https://artifacts-cdn.autohero.com/retail-sharding/public/assets/error-gif-760d3e2469cb2afb49a1b0c36f0838b2.gif"
            alt=""
          />
        </div>
        <div className="error-page-content">
          <h1 className="title">oupsy !</h1>
          <h2 className="subtitle">page introuvable</h2>
          <p className="text">
            On dirait que vous êtes dans une impasse. Remettez-vous sur la bonne
            voie !
          </p>
          <PrimaryButton
            label={"Revenir a l'accueil"}
            onClick={handleClick}
            icon={<FaChevronCircleRight />}
          />
        </div>
      </div>
    </ErrorPageStyled>
  );
}

const ErrorPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px;
  background-color: ${theme.colors.white};
  border: 4px solid blue;

  .content {
    border: 3px solid green;
    display: flex;
    gap: 48px;
    height: min-content;
    width: max-content;
  }

  .error-page-image {
    border: 1px solid red;
    img {
      width: 230px;
    }
  }

  .error-page-content {
    border: 1px solid red;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.md};
  }

  h2 {
    text-transform: uppercase;
  }
`;
