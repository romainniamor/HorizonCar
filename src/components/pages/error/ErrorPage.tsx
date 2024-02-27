import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import PrimaryButton from "../../reusable/buttons/PrimaryButton";
import { FaChevronCircleRight } from "react-icons/fa";

export default function ErrorPage({}) {
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
          <div className="button-box">
            <PrimaryButton
              label={"Revenir a l'accueil"}
              onClick={handleClick}
              icon={<FaChevronCircleRight />}
            />
          </div>
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
  background-color: ${theme.colors.background_white};

  .content {
    display: flex;
    gap: ${theme.spacing.lg};
    height: min-content;
    width: max-content;
  }

  .error-page-image {
    img {
      width: 280px;
    }
  }

  .error-page-content {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.md};
    padding: 0 10px;

    .title {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.P6};
      text-transform: capitalize;
    }

    .subtitle {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.P4};
      text-transform: capitalize;
      font-weight: ${theme.weights.medium};
    }

    .text {
      color: ${theme.colors.dark};
      font-size: ${theme.fonts.P0};
    }

    .button-box {
      width: 70%;
      margin-top: ${theme.spacing.md};
    }
  }
`;
