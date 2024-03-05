import styled from "styled-components";
import { theme } from "../../theme/index";

export default function Title({ label }: string) {
  return (
    <TitleStyled>
      <h2 className="title">{label}</h2>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  position: relative;
  margin: 40px;
  .title {
    font-size: ${theme.fonts.P3};
    font-weight: ${theme.weights.regular};
    color: ${theme.colors.secondary};
    text-align: center;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -15px;
    width: 50px;
    height: 2.3px;
    background-color: ${theme.colors.primary};
  }
`;
