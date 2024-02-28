import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import {
  formatedKilometer,
  formatedPrice,
  applyDiscount,
} from "../../../../../utils/math";
import { GoDotFill } from "react-icons/go";
import { ReactNode } from "react";
import DiscountTag from "../../../../reusable/DiscountTag";

type CarProps = {
  imageSource: string;
  modele: string;
  description: string;
  year: number;
  energy: string;
  kilometer: number;
  gearbox: string;
  price: number;
  discount: number;
  children: ReactNode;
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
  discount,
  children,
}: CarProps) {
  return (
    <CarStyled>
      <div className="image-preview">
        <img src={imageSource} alt={modele} />
        <DiscountTag discount={formatedPrice(discount)} />
      </div>
      <div className="card-content">
        <div className="car-info">
          <div className="left">
            <h3 className="modele">{modele}</h3>
            <p className="description">{description}</p>
            <span className="info">
              {year} <GoDotFill />
              {energy} <GoDotFill />
              {formatedKilometer(kilometer)}
            </span>
            <p>{gearbox}</p>
          </div>
          <div className="right">
            <div className="price">
              <span className="price-with-discount">
                {applyDiscount(price, discount)}
              </span>
              <span className="price">{formatedPrice(price)}</span>
            </div>
          </div>
        </div>
        <div className="buttons">{children}</div>
      </div>
    </CarStyled>
  );
}

const CarStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  border: 1px solid transparent;
  overflow: hidden;
  width: auto;
  min-width: 350px;
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
  }
  .image-preview {
    width: 100%;
    position: relative;
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
      display: flex;
      flex-direction: column;

      .price {
        color: ${theme.colors.secondary};
        font-size: ${theme.fonts.P1};
        font-weight: ${theme.weights.bold};
        display: flex;
        flex-direction: column;
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
