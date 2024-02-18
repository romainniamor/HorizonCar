import styled from "styled-components";

type Props = {};

export default function MainContent({}: Props) {
  return <MainContentStyled>MainContent</MainContentStyled>;
}

const MainContentStyled = styled.div`
  width: 100%;
  flex: 1;
  background-color: pink;
`;
