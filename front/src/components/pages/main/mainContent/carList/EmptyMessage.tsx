import styled from "styled-components";
import { theme } from "../../../../../theme";
import Title from "../../../../reusable/Title";

type Props = {
  inputValue: string;
};

export default function EmptyMessage({ inputValue }: Props) {
  return (
    <EmptyMessageStyled>
      <div className="white-box">
        <Title
          label={
            "Nous n'avons pas pu trouver de véhicules appropriés selon votre recherche"
          }
        />
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
      <Title label={"Ces voitures pourraient vous intéresser"} />
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
`;
