import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Button() {
  return (
    <ButtonStyled>
      <span>Accedez à votre espace</span>
      <div className="icon">
        <FaChevronCircleRight />
      </div>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  color: ${theme.colors.white};
  font-family: ${theme.fontFamily.normal};
  align-items: center;
  justify-content: center;
  font-weight: ${theme.weights.bold};
  border-radius: ${theme.borderRadius.round};
  width: 100%;
  gap: ${theme.spacing.xs};
  background: ${theme.colors.primary};
  font-size: ${theme.fonts.sm};
  font-weight: ${theme.weights.bold};
  padding: 18px 24px;

  .icon {
    display: flex;
  }

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:active {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
