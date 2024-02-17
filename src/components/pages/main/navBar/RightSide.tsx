import styled from "styled-components";
import { Link } from "react-router-dom";

type RightSideProps = {
  userName: string;
};

export default function RightSide({ userName }: RightSideProps) {
  return (
    <RightSideStyled>
      <span>Bonjour</span>
      <span>{userName}</span>
      <Link to={"/"}>Se deconnecter</Link>
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
