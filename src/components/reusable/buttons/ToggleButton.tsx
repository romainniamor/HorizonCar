import { styled, css } from "styled-components";
import { theme } from "../../../theme/index";
import { FaCheck } from "react-icons/fa";

type ToggleButtonProps = {
  isChecked: boolean;
  onClick: () => void;
};

export default function ToggleButton({
  isChecked,
  onClick,
}: ToggleButtonProps) {
  return (
    <ToggleButtonStyled onClick={onClick} isChecked={isChecked}>
      {isChecked ? (
        <FaCheck className="checked" />
      ) : (
        <div className="unchecked"></div>
      )}

      <div className="label">Comparer</div>
    </ToggleButtonStyled>
  );
}

const ToggleButtonStyled = styled.button`
  cursor: pointer;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.greyLight};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 10px;
  &:hover {
    border: 1px solid ${theme.colors.primary};
  }

  .unchecked {
    width: 23px;
    height: 23px;
    border: 1px solid ${theme.colors.greyLight};
  }

  .checked {
    width: 23px;
    height: 23px;
    padding: 3px;
    border: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  ${(props) => props.isChecked && IsCheckedStyle}
`;

const IsCheckedStyle = css`
  border: 1px solid ${theme.colors.primary};
`;
