import styled from "styled-components";
import { theme } from "../../../../theme";
import DeleteButton from "../../../reusable/buttons/DeleteButton";
type ResultBarProps = {
  onDelete: () => void;
  value: any[];
  //do better type
};

export default function ResultBar({ onDelete, value }: ResultBarProps) {
  return (
    <ResultBarStyled>
      <div className="results">
        <span>{value.length}</span>
        {value.length === 1 ? <span>Résultat</span> : <span>Résultats</span>}
      </div>
      <DeleteButton onClick={onDelete} label="Effacer le filtre" />
    </ResultBarStyled>
  );
}

const ResultBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  font-size: ${theme.fonts.S};
  gap: ${theme.spacing.md};
  margin-bottom: 10px;

  span {
    margin-right: ${theme.spacing.xxs};
  }
`;
