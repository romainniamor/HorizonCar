import styled from "styled-components";
import { theme } from "../../../../../theme/index";

export default function Card() {
  return <CardStyled>Card</CardStyled>;
}

const CardStyled = styled.div`

    border-radius: ${theme.borderRadius.round};
    overflow: hidden;
    max-width: 520px;
    max-height: 480px;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 5px;
    .image-preview {
      width: 100%;
      border: 1px solid black;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .card-content {
      padding: 0px 10px 20px 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .car-info {
      display: flex;
      justify-content: space-between;
      text-transform: capitalize;
      color: ${theme.colors.greyDark};
      font-size: ${theme.fonts.S};
      font-weight: ${theme.weights.regular};

      .right {
        text-align: right;

        .price {
          color: ${theme.colors.secondary};
          font-size: ${theme.fonts.P1};
          font-weight: ${theme.weights.bold};
        }
      }

      .left {
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-align: left;

        .modele {
          color: ${theme.colors.secondary};
          font-size: ${theme.fonts.P1};
          font-weight: ${theme.weights.bold};
        }
        .description {
        }
        .info {
          display: flex;
          align-items: center;
          gap: 5px;
        }
      }
    }
    .bottom {
      display: grid;
      grid-template-columns: 1fr 3fr;
    }
  }`;
