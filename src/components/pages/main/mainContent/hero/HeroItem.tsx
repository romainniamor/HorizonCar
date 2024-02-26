import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";

type HeroItemProps = {
  icon: React.ReactNode;
  label: string;
};

export default function HeroItem({ icon, label }: HeroItemProps) {
  return (
    <HeroItemStyled>
      <div className="icon">{icon}</div>
      <span className="message">{label}</span>
    </HeroItemStyled>
  );
}

const HeroItemStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.S};
  font-weight: ${theme.weights.medium};
  gap: ${theme.spacing.xs};
  height: 100%;
  width: 100%;

  .icon {
    display: flex;
    color: ${theme.colors.primary};
  }

  .message {
    color: ${theme.colors.secondary};
  }
`;
