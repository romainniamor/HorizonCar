import styled from "styled-components";
import { theme } from "../../theme";

type DiscountTagProps = {
  amount: string | number;
};

export default function DiscountTag({ amount }: DiscountTagProps) {
  return (
    <DiscountTagStyled>
      <span className="label">Economisez</span>
      <span className="discount">{amount}</span>
    </DiscountTagStyled>
  );
}

const DiscountTagStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs};
  padding: 6px 10px;
  background: ${theme.colors.red};

  position: absolute;
  top: 10px;
  left: 0px;

  span {
    z-index: 2;
    font-weight: ${theme.weights.semiBold};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -15px;
    width: 30px;
    height: 100%;
    background: ${theme.colors.red};
    border-width: 0 10px 10px 10px;
    transform: skewX(-25deg);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 5px;
  }
`;
