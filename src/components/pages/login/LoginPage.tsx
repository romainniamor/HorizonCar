import LoginForm from "./LoginForm";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import Logo from "../../reusable/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="left-side" />
      <div className="right-side">
        <Logo />
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.background_white};
  display: flex;
  align-items: center;

  .left-side {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/background.jpg");
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    flex: 1;
  }

  .right-side {
    width: 550px;
    min-width: 450px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: ${theme.shadows.medium};
  }
`;
