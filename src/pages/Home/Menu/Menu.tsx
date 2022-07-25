import React from "react";
import Overlay from "../../../components/Overlay";
import MenuModal from "./MenuModal/MenuModal";
import { useDispatch } from "react-redux";
import { onMenuClose } from "redux/slices/homeSlice";

export default function Menu() {
  const dispatch = useDispatch();
  return (
    <>
      <MenuModal />
      <Overlay onCloseModal={() => dispatch(onMenuClose())} />
      {/* Passing as prop so that Overlay can be re-used. */}
    </>
  );
}
