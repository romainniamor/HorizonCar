import styled from "styled-components";
import { theme } from "../../theme/index";

type Props = {};

export default function Logo({}: Props) {
  return (
    <LogoStyled>
      <span>auto</span>
      <span>horizon</span>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  height: 100%;
  width: 180px;
  background: ${theme.colors.white};
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;

  span {
    font-family: ${theme.fontFamily.title};
    letter-spacing: ${theme.spacing.xxxs};
    font-style: italic;
    font-weight: ${theme.weights.bold};
    text-transform: uppercase;
    font-size: ${theme.fonts.P3};
  }

  span:nth-child(1) {
    color: ${theme.colors.primary};
  }

  span:nth-child(2) {
    color: ${theme.colors.secondary};
  }

  &::after {
    content: "";
    position: absolute;
    width: 30px;

    background: ${theme.colors.white};
    transform: skewX(-25deg);
    height: 100%;
    top: 0;
    right: -15px;
  }
`;
