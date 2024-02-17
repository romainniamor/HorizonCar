import styled from "styled-components";
import { theme } from "../../theme/index";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return <LogoStyled className={className}>horizon car</LogoStyled>;
}

const LogoStyled = styled.div`
  font-size: ${theme.fonts.P3};
  font-family: ${theme.fontFamily.title};
  color: ${theme.colors.primary};
  text-shadow: ${theme.shadows.subtle};
  letter-spacing: 4px;
  text-transform: uppercase;
  line-height: 1;
`;
