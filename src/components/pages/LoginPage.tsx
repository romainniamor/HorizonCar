import React from "react";
import { useState } from "react";

export default function LoginPage() {
  //state

  const [inputValue, setInputValue] = React.useState<string>("");

  //comportements
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    alert(`welcome ${inputValue}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //affichage
  return (
    <div>
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
    </div>
  );
}
