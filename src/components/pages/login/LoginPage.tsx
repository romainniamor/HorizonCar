import LoginForm from "./LoginForm";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import Logo from "../../reusable/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="login-page-content">
        <Logo className={"logo-login-page"} />
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

  .login-page-content {
    height: 100%;
    width: 40%;
    max-width: 630px;
    min-width: 350px;
    background-color: ${theme.colors.dark + "90"};
    box-shadow: ${theme.shadows.medium};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo-login-page {
    font-size: ${theme.fonts.P6};
  }

  @media (max-width: 630px) {
    .login-page-content {
      width: 100%;
    }
  }
`;
