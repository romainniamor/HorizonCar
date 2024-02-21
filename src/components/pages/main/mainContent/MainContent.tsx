import styled from "styled-components";
import Hero from "./hero/Hero";
import { theme } from "../../../../theme/index";
import MainForm from "./form/MainForm";
import CarList from "./carList/CarList";

type Props = {};

export default function MainContent({}: Props) {
  return (
    <MainContentStyled>
      <Hero />
      <MainForm />
      <CarList />
      <div className="panel-bottom">toddggle</div>
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  width: 100%;
  max-width: 2400px;
  padding: 0 15px;
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  gap: 15px;

  .panel-bottom {
    position: fixed;
    z-index: 2;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    width: 500px;
    height: 150px;
    background-color: yellow;
    border-top-right-radius: ${theme.borderRadius.round};
    border-top-left-radius: ${theme.borderRadius.round};
    /* background-color: ${theme.colors.white}; */
    padding: 10px;
  }
`;
