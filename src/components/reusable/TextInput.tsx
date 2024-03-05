import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import IconButton from "./buttons/IconButton";
import { theme } from "../../theme";

type TextInputProps = {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  icon?: React.ReactNode;
  isSearchIcon?: boolean;
  onDelete?: () => void;
};

export default function TextInput({
  placeholder,
  onChange,
  value,
  isSearchIcon,
  onDelete,
}: TextInputProps) {
  return (
    <TextInputStyled>
      <input
        type="text"
        placeholder={placeholder}
        className="input"
        onChange={onChange}
        value={value}
      />

      {value && (
        <div className="delete-button" onClick={onDelete}>
          <RxCross2 />
        </div>
      )}

      {isSearchIcon && <IconButton icon={<FiSearch />} />}
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: 8px 15px;
  color: ${theme.colors.greyLight};
  border: 1px solid ${theme.colors.greyLight};
  background-color: ${theme.colors.white};
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${theme.colors.primary};
  }

  input {
    border: none;
    width: 100%;
    background: ${theme.colors.white};
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.P0};

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
    &:focus {
      outline: 0px;
    }
  }
  .delete-button {
    display: flex;
    color: ${theme.colors.secondary};
    font-size: ${theme.fonts.P2};
    cursor: pointer;
  }
`;
