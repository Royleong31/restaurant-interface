import React from "react";
import styled from "styled-components";

type overlayProps = {
  onCloseModal: () => void;
  children?: React.ReactNode;
};

export const BackDropStyle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
  animation: dissolve-in cubic-bezier(0.18, 0.99, 0.74, 1) 0.3s;

  @keyframes dissolve-in {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.75);
    }
  }
`;

export default function Overlay({ children, onCloseModal }: overlayProps) {
  return <BackDropStyle onClick={onCloseModal}>{children}</BackDropStyle>;
}
