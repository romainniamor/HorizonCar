import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

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
    <LoginPageStyled>
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="username"
          placeholder="Entrez votre prénom..."
          value={inputValue}
          onChange={handleChange}
        />
        <button>Accedez à votre espace</button>
      </form>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
    gap: 10px;
  }
`;
