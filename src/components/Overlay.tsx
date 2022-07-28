import React, { useEffect } from "react";
import styled from "styled-components";

type overlayProps = {
  onCloseModal: () => void;
  children?: React.ReactNode;
};

export const BackDropStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
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

function stopScroll(): void {
  const body = document.getElementsByTagName("body")[0];
  body.classList.add("stopBodyScroll"); //add stopScroll class whenever overlay is mounted
}

function startScroll(): void {
  const body = document.getElementsByTagName("body")[0];
  body.classList.remove("stopBodyScroll"); //remove stopScroll class whenever overlay is dismounted
}

export default function Overlay({ children, onCloseModal }: overlayProps) {
  useEffect(() => {
    stopScroll();
  }, []);
  useEffect(() => () => startScroll(), []);

  return <BackDropStyle onClick={onCloseModal}>{children}</BackDropStyle>;
}
