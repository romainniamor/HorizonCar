import styled from "styled-components";
import { theme } from "../../../theme";

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
};

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return <IconButtonStyled onClick={onClick}>{icon}</IconButtonStyled>;
}

const IconButtonStyled = styled.div`
  cursor: pointer;
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.P4};
  background-color: ${theme.colors.primary};
  padding: 6px;
  border-radius: ${theme.borderRadius.round};

  &:hover {
    background-color: ${theme.colors.primaryLight};
  }

  &:active {
    background-color: ${theme.colors.primary};
  }
`;
