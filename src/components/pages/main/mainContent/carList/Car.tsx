import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { formatedPrice } from "../../../../../utils/math";
import { GoDotFill } from "react-icons/go";

type CarProps = {
  imageSource: string;
  modele: string;
  description: string;
  year: number;
  energy: string;
  kilometer: number;
  gearbox: string;
  price: number;
};

export default function Car({
  imageSource,
  modele,
  description,
  year,
  energy,
  kilometer,
  gearbox,
  price,
  children,
}: CarProps) {
  return (
    <CarStyled>
      <div className="image-preview">
        <img src={imageSource} alt={modele} />
      </div>
      <div className="card-content">
        <div className="car-info">
          <div className="left">
            <h3 className="modele">{modele}</h3>
            <p className="description">{description}</p>
            <span className="info">
              {year} <GoDotFill />
              {energy} <GoDotFill />
              {kilometer}
            </span>
            <p>{gearbox}</p>
          </div>
          <div className="right">
            <p className="price">{formatedPrice(price)}</p>
          </div>
        </div>
        <div className="buttons">{children}</div>
      </div>
    </CarStyled>
  );
}

const CarStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  box-sizing: border-box;
  overflow: hidden;
  max-width: 530px;
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    border: 1px solid ${theme.colors.greyLight};
  }
  .image-preview {
    width: 100%;
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
  .buttons {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 10px;
  }
`;
