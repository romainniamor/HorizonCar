import styled from "styled-components";
import { theme } from "../../theme/index";

type NavIconProps = {
  icon: any;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className: string;
};

export default function NavIcon({
  icon,
  onMouseEnter,
  onMouseLeave,
  className,
}: NavIconProps) {
  return (
    <NavIconStyled
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
    </NavIconStyled>
  );
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
