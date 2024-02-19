import styled from "styled-components";
import { theme } from "../../theme";

type IconButtonProps = {
  icon: React.ReactNode;
};

export default function IconButton({ icon }: IconButtonProps) {
  return <IconButtonStyled>{icon}</IconButtonStyled>;
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
    background-color: #f3782b;
  }

  &:active {
    background-color: ${theme.colors.primary};
  }
`;
