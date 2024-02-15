import React from "react";

export default function LoginForm() {
  //state

  const [inputValue, setInputValue] = React.useState<string>("");

  //comportements
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`welcome ${inputValue}`);
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
