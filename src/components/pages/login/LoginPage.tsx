import LoginForm from "./LoginForm";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import Logo from "../../reusable/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="right">
        <Logo />
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: right;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/background.jpg");
  background-size: cover;
  background-position: center;

  .right {
    height: 100%;
    width: 40%;
    max-width: 630px;
    min-width: 500px;
    background-color: ${theme.colors.dark + "90"};
    box-shadow: ${theme.shadows.medium};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
