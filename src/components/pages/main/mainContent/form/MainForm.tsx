import IconButton from "../../../../reusable/buttons/IconButton";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { theme } from "../../../../../theme/index";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onDelete: () => void;
};

export default function MainForm({
  onSubmit,
  onChange,
  value,
  onDelete,
}: Props) {
  return (
    <FormStyled onSubmit={onSubmit}>
      <div className="text-input">
        <input
          type="text"
          placeholder="Recherchez par marque, modèle ou mot-clé (par exemple, Renault Clio"
          className="input"
          onChange={onChange}
          value={value}
        />

        {value && (
          <div className="delete-button" onClick={onDelete}>
            <RxCross2 />
          </div>
        )}

        <IconButton onClick={onSubmit} icon={<FiSearch />} />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;

  .text-input {
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};
    padding: 8px 15px;
    color: ${theme.colors.greyLight};
    font-size: ${theme.fonts.sm};
    border: 1px solid ${theme.colors.greyLight};
    background-color: ${theme.colors.white};
    width: 70%;
    transition: all 0.2s ease-in-out;

    &:hover {
      border: 1px solid ${theme.colors.primary};
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
    .delete-button {
      display: flex;
      color: ${theme.colors.secondary};
      font-size: ${theme.fonts.P2};
      cursor: pointer;
    }
  }
`;
