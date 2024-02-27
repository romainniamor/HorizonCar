import { theme } from "../../../../../../theme";
import styled from "styled-components";

type CarInfoProps = {
  elements: { [key: string]: any }[];
  index: number;
  data: string;
};

export default function CarInfo({ elements, index, data }: CarInfoProps) {
  return (
    <CarInfoStyled>
      <span className="car-data">
        {elements[index] && elements[index][data]}
      </span>
    </CarInfoStyled>
  );
}

const CarInfoStyled = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;

  .car-data {
    width: 50%;
    height: auto;
    border-bottom: 1px solid ${theme.colors.greyLight};
    padding: 15px 0;
    word-wrap: break-word;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
    font-weight: ${theme.weights.regular};
    line-height: 1.5;
  }
`;
