import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";

export default function MainPage() {
  const { userName } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <MainPageStyled>
      <div className="navbar">
        <p>logo</p>
        <div className="right-side">
          <p>MainPage bienvenue {userName}</p>
          <button onClick={handleClick}>Se deconnecter</button>
        </div>
      </div>
      <div className="main-content"></div>
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background_white};

  .navbar {
    width: 100%;
    height: 60px;
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .right-side {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  .main-content {
    width: 100%;
    flex: 1;
    background-color: pink;
  }
`;
