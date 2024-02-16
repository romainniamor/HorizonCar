import styled from "styled-components";
import { theme } from "../../theme/index";

export default function Logo() {
  return <LogoStyled>horizon car</LogoStyled>;
}

const LogoStyled = styled.div`
  font-size: ${theme.fonts.P6};
  font-family: ${theme.fontFamily.title};
  color: ${theme.colors.primary};
  text-shadow: ${theme.shadows.subtle};
  letter-spacing: 4px;
  text-transform: uppercase;
  line-height: 1;
`;
