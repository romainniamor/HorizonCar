import styled from "styled-components";
import { theme } from "../../theme/index";

export default function Logo() {
  return (
    <LogoStyled>
      <img src="/logo.png" alt="logo" />
      <span className="label">horizon car</span>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 1px solid blue;

  img {
    height: 55px;
    display: flex;
    position: relative;
    bottom: 5px;
  }

  .label {
    font-size: ${theme.fonts.P5};
    font-family: ${theme.fontFamily.title};
    letter-spacing: 4px;
    text-transform: uppercase;
    line-height: 1;
  }
`;
