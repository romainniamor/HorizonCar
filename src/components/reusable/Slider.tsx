import styled from "styled-components";
import { theme } from "../../theme/index";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { ReactNode } from "react";

type SliderProps = {
  children: ReactNode[];
};

export default function Slider({ children }: SliderProps) {
  const slides = React.Children.toArray(children);
  return (
    <SliderStyled>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {slides.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </SliderStyled>
  );
}

const SliderStyled = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
  }

  .swiper-button-prev:after {
    color: ${theme.colors.greyLight};
    font-size: ${theme.fonts.P1};
    font-weight: ${theme.weights.bold};
  }
  .swiper-button-next:after {
    color: ${theme.colors.greyLight};
    font-size: ${theme.fonts.P1};
    font-weight: ${theme.weights.bold};
  }
`;
