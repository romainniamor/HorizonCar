import styled from "styled-components";
import { theme } from "../../theme/index";
import { ReactNode } from "react";

export type NavIconProps = {
  icon: ReactNode;
  className?: string;
};

export default function NavIcon({ icon, className }: NavIconProps) {
  return <NavIconStyled className={className}>{icon}</NavIconStyled>;
}

const NavIconStyled = styled.div`
  color: ${theme.colors.white};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: not-allowed;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
  }
`;
