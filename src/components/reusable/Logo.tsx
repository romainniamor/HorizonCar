import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

type Props = {};

export default function Logo({}: Props) {
  return <LogoStyled>Logo</LogoStyled>;
}

const LogoStyled = styled.div`
  height: 100%;
  width: 180px;
  background: ${theme.colors.white};
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 50px;

    background: ${theme.colors.white};
    transform: skewX(-25deg);
    height: 100%;
    top: 0;
    right: -15px;
  }
`;
