import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme/index";
import { FaUser } from "react-icons/fa";
import Button from "../../reusable/Button";

export default function LoginForm() {
  //state

  const [inputValue, setInputValue] = React.useState<string>("");
  const navigate = useNavigate();

  //comportements
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue("");
    navigate(`main/${inputValue}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //affichage
  return (
    <LoginFormStyled>
      <hr />
      <h2>se connecter</h2>
      <form onSubmit={handleSubmit}>
        <div className="text-input">
          <div className="icon">
            <FaUser />
          </div>
          <input
            required
            type="text"
            name="username"
            placeholder="Entrez votre prénom"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        <Button label={"Accedez à votre espace"} />
      </form>
    </LoginFormStyled>
  );
}
const LoginFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Amatic SC", cursive;
  gap: ${theme.spacing.md};
  color: ${theme.colors.greyLight};
  max-width: 464px;
  min-width: 400px;
  padding: 2.5rem 2rem;

  hr {
    width: 80%;
    border: 1px solid ${theme.colors.greyMedium};
  }
  h2 {
    text-transform: uppercase;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.md};
    width: 100%;

    .text-input {
      border-radius: ${theme.borderRadius.round};
      display: flex;
      gap: ${theme.spacing.xs};
      align-items: center;
      padding: 18px 24px;
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.sm};
      background: ${theme.colors.greyLight};
      border: 1px solid ${theme.colors.dark};
      width: 100%;

      input {
        border: none;
        padding: 2px;
        width: 100%;
        background: transparent;

        color: ${theme.colors.dark};
        &::placeholder {
          color: ${theme.colors.greyBlue};
        }
        &:focus {
          outline: 1px solid ${theme.colors.greySemiDark};
        }
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.sm};
      }
    }
  }
`;
