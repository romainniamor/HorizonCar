import styled from "styled-components";
import Hero from "./hero/Hero";
import { theme } from "../../../../theme/index";
import MainForm from "./form/MainForm";

type Props = {};

export default function MainContent({}: Props) {
  return (
    <MainContentStyled>
      <Hero />
      <MainForm />
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  width: 100%;
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
