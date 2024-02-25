import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import { RxCross2 } from "react-icons/rx";

type PanelRightTitleTagProps = {
  onClick: () => void;
};

export default function PanelRightTitleTag({
  onClick,
}: PanelRightTitleTagProps) {
  return (
    <PanelRightTitleStyled>
      <span className="label"> Comparer les voitures</span>
      <div className="icon" onClick={onClick}>
        <RxCross2 />
      </div>
    </PanelRightTitleStyled>
  );
}

const PanelRightTitleStyled = styled.div`
  padding: 15px;
  font-size: ${theme.fonts.P1};
  border-bottom: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  font-weight: ${theme.weights.semiBold};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.secondary};
  position: relative;
  .icon {
    position: absolute;
    right: 25px;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${theme.fonts.P2};
    color: ${theme.colors.secondary};
  }
`;
