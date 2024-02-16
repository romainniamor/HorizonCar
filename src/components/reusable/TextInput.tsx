import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

type TextInputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  icon?: React.ReactElement;
};

export default function TextInput({
  value,
  onChange,
  icon,
  ...extraProps
}: TextInputProps) {
  return (
    <TextInputStyled>
      <div className="icon">{icon && icon}</div>
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  color: ${theme.colors.greyBlue};
  font-size: ${theme.fonts.sm};
  background: ${theme.colors.greyLight};
  border: 1px solid ${theme.colors.dark};
  width: 100%;
  input {
    border: none;
    padding: 2px 5px;
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
    margin-right: ${theme.spacing.xs};
  }
`;
