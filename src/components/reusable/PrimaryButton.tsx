import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

type ButtonProps = {
  label: string;
  icon?: React.ReactElement;
};

export default function PrimaryButton({ label, icon }: ButtonProps) {
  return (
    <PrimaryButtonStyled>
      <span className="label">{label}</span>
      <div className="icon">{icon && icon}</div>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-family: ${theme.fontFamily.normal};
  font-weight: ${theme.weights.bold};
  border-radius: ${theme.borderRadius.round};
  width: 100%;
  background: ${theme.colors.primary};
  font-size: ${theme.fonts.sm};
  font-weight: ${theme.weights.bold};
  padding: 18px 24px;
  line-height: 1;

  .icon {
    display: flex;
    margin-left: ${theme.spacing.xs};
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
