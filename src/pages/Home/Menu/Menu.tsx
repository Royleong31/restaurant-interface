import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Overlay from "../../../components/Overlay";
import MenuModal from "./MenuModal/MenuModal";
import HomeContext from "redux/HomeContext/HomeContext";

const portalElement = document.getElementById("overlays") || new Element();

export default function Menu() {
  const homeContext = useContext(HomeContext);
  return (
    <>
      {ReactDOM.createPortal(<MenuModal />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay onCloseModal={homeContext.onMenuClose} />,
        portalElement
      )}
    </>
  );
}
