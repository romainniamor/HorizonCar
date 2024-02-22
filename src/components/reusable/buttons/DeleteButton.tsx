import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { theme } from "../../../theme";

type DeleteButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function DeleteButton({ label, onClick }: DeleteButtonProps) {
  return (
    <DeleetButtonStyled className="delete-button" onClick={onClick}>
      <span className="label">{label}</span>
      <div className="icon">
        <TiDelete />
      </div>
    </DeleetButtonStyled>
  );
}

const DeleetButtonStyled = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: ${theme.borderRadius.round};
  color: ${theme.colors.dark};
  border: 1px solid ${theme.colors.primary};
  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xxs};
  background: none;
  min-width: max-content;

  &:hover {
    border: 1px solid ${theme.colors.primaryLight};
  }

  .icon {
    display: flex;
    justify-content: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P3};
  }
`;
