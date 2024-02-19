import styled from "styled-components";
import Hero from "./hero/Hero";
import { theme } from "../../../../theme/index";
import IconButton from "../../../reusable/IconButton";

import { FiSearch } from "react-icons/fi";

type Props = {};

export default function MainContent({}: Props) {
  return (
    <MainContentStyled>
      <Hero />
      <form>
        <div className="text-input">
          <input
            type="text"
            placeholder="Recherchez par marque, modèle ou mot-clé (par exemple, Renault Clio"
            className="input"
          />
          <IconButton icon={<FiSearch />} />
        </div>
      </form>
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  width: 100%;
  background-color: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  gap: 15px;

  form {
    width: 100%;
    display: flex;
    justify-content: center;
  }

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
