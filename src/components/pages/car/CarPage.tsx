import styled from "styled-components";
import { theme } from "../../../theme";

export default function CarPage() {
  return (
    <CarPageStyled>
      <h2>CarPage de la voiture</h2>
    </CarPageStyled>
  );
}

const CarPageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background_white};
`;
