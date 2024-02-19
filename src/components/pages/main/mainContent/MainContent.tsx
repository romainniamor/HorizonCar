import styled from "styled-components";
import Hero from "./hero/Hero";
import { theme } from "../../../../theme/index";

type Props = {};

export default function MainContent({}: Props) {
  return (
    <MainContentStyled>
      <Hero />
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${theme.colors.background_white};
`;
