import React from "react";
import { SearchBoxStyle } from "./SearchBoxStyle";
import { SearchIcon } from "assets/svgs/index";

export default function SearchBox() {
  return (
    <SearchBoxStyle>
      <SearchIcon />
      Search
    </SearchBoxStyle>
  );
}
