import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

type ButtonProps = {
  label: string;
  icon?: React.ReactElement;
  onClick?: () => void;
};

export default function PrimaryButton({ label, icon, onClick }: ButtonProps) {
  return (
    <PrimaryButtonStyled onClick={onClick}>
      <span className="label">{label}</span>
      <div className="icon">{icon && icon}</div>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-family: ${theme.fontFamily.normal};
  font-weight: ${theme.weights.semiBold};
  border-radius: ${theme.borderRadius.round};
  width: 100%;
  background: ${theme.colors.primary};
  font-size: ${theme.fonts.sm};
  font-weight: ${theme.weights.bold};
  padding: 15px 30px;
  line-height: 1;

  .icon {
    display: flex;
    margin-left: ${theme.spacing.xs};
  }

  &:hover {
    background: ${theme.colors.primaryLight};
  }

  &:active {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
