import React from "react";
import { SearchBoxStyle, InputStyled } from "./Search.style";
import { SearchIcon } from "assets/svgs/index";

export default function SearchBox() {
  return (
    <SearchBoxStyle>
      <SearchIcon />
      <InputStyled type={"search"} placeholder="Search" disabled />
    </SearchBoxStyle>
  );
}
