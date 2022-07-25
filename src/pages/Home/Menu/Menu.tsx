import React from "react";
import Overlay from "../../../components/Overlay";
import MenuModal from "./MenuModal/MenuModal";

type Props = {
  onCloseMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Menu({ onCloseMenu }: Props) {
  return (
    <>
      <MenuModal />
      <Overlay onCloseModal={onCloseMenu} />
    </>
  );
}
