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
import { CarType } from "../../../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

type CarProps = CarType & {
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
  console.log(typeof formatedPrice(price));
  return (
    <CarStyled>
      <div className="image-preview">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {imageSource.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={modele} />
            </SwiperSlide>
          ))}
        </Swiper>
        {discount > 0 && <DiscountTag amount={formatedPrice(discount)} />}
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
            {applyDiscount(price, discount) !== formatedPrice(price) ? (
              <div className="prices">
                <span className="price-with-discount">
                  {applyDiscount(price, discount)}
                </span>
                <span className="prev-price">{formatedPrice(price)}</span>
              </div>
            ) : (
              <span className="initial-price">{formatedPrice(price)}</span>
            )}
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
      .initial-price {
        color: ${theme.colors.secondary};
        font-size: ${theme.fonts.P1};
        font-weight: ${theme.weights.bold};
      }

      .prices {
        display: flex;
        flex-direction: column;

        .price-with-discount {
          color: ${theme.colors.red};
          font-size: ${theme.fonts.P1};
          font-weight: ${theme.weights.bold};
        }
        .prev-price {
          font-size: ${theme.fonts.P0};
          color: ${theme.colors.secondary};
          font-weight: ${theme.weights.semiBold};
          text-decoration: line-through;
        }
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
