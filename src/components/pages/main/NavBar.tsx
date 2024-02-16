import React from "react";
import { theme } from "../../../theme/index";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {};

export default function NavBar({}: Props) {
  const { userName } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <NavBarStyled>
      <p>logo</p>
      <div className="right-side">
        <span>Bonjour</span>
        <span>{userName}</span>
        <button onClick={handleClick}>Se deconnecter</button>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  height: 60px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .right-side {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
