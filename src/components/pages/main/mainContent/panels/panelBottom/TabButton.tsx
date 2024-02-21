import styled from "styled-components";
import { theme } from "../../../../../../theme";
import React from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

export default function TabButton({ icon, label, onClick }: Props) {
  return (
    <TabButtonStyled onClick={onClick}>
      <div className="icon">{icon}</div>
      <span>{label}</span>
    </TabButtonStyled>
  );
}

const TabButtonStyled = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs};
  border: none;
  cursor: pointer;
  font-size: ${theme.fonts.P1};
  padding: 10px;
  color: ${theme.colors.secondary};
  font-weight: ${theme.weights.semiBold};
  background-color: transparent;

  .icon {
    font-size: ${theme.fonts.P3};
    color: ${theme.colors.secondary};
    font-weight: ${theme.weights.bold};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
