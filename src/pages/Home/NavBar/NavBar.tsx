import { NavBarStyle } from "./NavBar.style";
import { MenuStyle } from "./Menu.style";
import { DownArrow } from "assets/svgs/index";
import { SearchBoxStyle, InputStyled } from "./Search.style";
import { SearchIcon } from "assets/svgs/index";

type Props = {
  menuClickHandler: React.Dispatch<React.SetStateAction<boolean>>;
  activeCategory: string;
};

export default function NavBar({ menuClickHandler, activeCategory }: Props) {
  return (
    <NavBarStyle>
      <MenuStyle onClick={() => menuClickHandler(true)}>
        {activeCategory}
        <DownArrow />
      </MenuStyle>
      <SearchBoxStyle>
        <SearchIcon />
        <InputStyled type={"search"} placeholder="Search" disabled />
      </SearchBoxStyle>
    </NavBarStyle>
  );
}
