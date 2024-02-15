import React from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <h1>Horizon Car Service</h1>
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
    </>
  );
}
