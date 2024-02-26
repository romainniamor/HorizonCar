import styled from "styled-components";
import { theme } from "../../../../../theme";

type Props = {
  inputValue: string;
};

export default function EmptyMessage({ inputValue }: Props) {
  return (
    <EmptyMessageStyled>
      <div className="white-box">
        <h2 className="title">
          Nous n'avons pas pu trouver de véhicules appropriés selon votre
          recherche
        </h2>
        <div className="text">
          <p>
            <span>Vous recherchez </span>
            <span className="input">'{inputValue}'</span>
          </p>
          <p>
            Veuillez vérifier s'il y a des erreurs d'orthographe ou essayez
            d'utiliser moins de mots-clés.
          </p>
        </div>
      </div>
      <h2 className="title">Ces voitures pourraient vous intéresser</h2>
    </EmptyMessageStyled>
  );
}

const EmptyMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  width: 100%;

  .white-box {
    width: 100%;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: ${theme.fonts.P0};
      font-weight: ${theme.weights.medium};
      color: ${theme.colors.dark};
      text-align: center;
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      .input {
        font-weight: ${theme.weights.semiBold};
      }
    }
  }

  h2 {
    font-size: ${theme.fonts.P3};
    font-weight: ${theme.weights.regular};
    color: ${theme.colors.secondary};
    position: relative;
    padding: 40px;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 25px;
      width: 50px;
      height: 2.3px;
      background-color: ${theme.colors.primary};
    }
  }
`;
