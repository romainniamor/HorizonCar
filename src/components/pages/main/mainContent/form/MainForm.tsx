import IconButton from "../../../../reusable/buttons/IconButton";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
type Props = {};

export default function MainForm({}: Props) {
  return (
    <FormStyled>
      <div className="text-input">
        <input
          type="text"
          placeholder="Recherchez par marque, modèle ou mot-clé (par exemple, Renault Clio"
          className="input"
        />
        <IconButton icon={<FiSearch />} />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .text-input {
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 8px 15px;
    color: ${theme.colors.greyLight};
    font-size: ${theme.fonts.sm};
    border: 1px solid ${theme.colors.greyLight};
    background-color: ${theme.colors.white};
    width: 70%;

    &:hover {
      border: 1.5px solid ${theme.colors.primary};
    }

    input {
      border: none;
      width: 100%;
      background: white;
      color: ${theme.colors.dark};
      font-size: ${theme.fonts.P0};
      &::placeholder {
        color: ${theme.colors.greyMedium};
      }
      &:focus {
        outline: 0px;
      }
    }
  }
`;
