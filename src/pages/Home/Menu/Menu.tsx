import React, { useContext } from "react";
import Overlay from "../../../components/Overlay";
import MenuModal from "./MenuModal/MenuModal";
import HomeContext from "redux/HomeContext/HomeContext";

export default function Menu() {
  const homeContext = useContext(HomeContext);
  return (
    <>
      <MenuModal />
      <Overlay onCloseModal={homeContext.onMenuClose} />
    </>
  );
}
