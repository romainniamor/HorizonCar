import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme/index";
import { FaUser } from "react-icons/fa";
import PrimaryButton from "../../reusable/PrimaryButton";
import TextInput from "../../reusable/TextInput";

import { FaChevronCircleRight } from "react-icons/fa";

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
        <TextInput
          icon={<FaUser />}
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
        />
        <PrimaryButton
          label={"Accedez à votre espace"}
          icon={<FaChevronCircleRight />}
        />
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
  }
`;
