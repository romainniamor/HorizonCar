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
      <div className="error-page-content">
        <h2>page introuvable</h2>
        <PrimaryButton
          label={"Revenir a l'accueil"}
          onClick={handleClick}
          icon={<FaChevronCircleRight />}
        />
      </div>
    </ErrorPageStyled>
  );
}

const ErrorPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/background.jpg");
  background-size: cover;
  background-position: center;

  .error-page-content {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing.md};
    padding: ${theme.spacing.lg};
  }

  h2 {
    text-transform: uppercase;
    color: ${theme.colors.greyLight};
    text-align: center;
  }
`;
