import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import TextInput from "../../../../reusable/TextInput";

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
      <div className="input-box">
        <TextInput
          placeholder="Recherchez par marque, modèle ou mot-clé (par exemple, Renault Clio"
          onChange={onChange}
          onDelete={onDelete}
          value={value}
          isSearchIcon
        />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  margin: 10px 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  .input-box {
    width: 70%;
  }
`;
