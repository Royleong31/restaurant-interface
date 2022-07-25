import React from "react";
import { SearchBoxStyle } from "./SearchBox.style";
import { SearchIcon } from "assets/svgs/index";

export default function SearchBox() {
  return (
    <SearchBoxStyle>
      <SearchIcon />
      Search
    </SearchBoxStyle>
  );
}
