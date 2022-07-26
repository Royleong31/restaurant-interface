import { categories } from "DummyData/Categories";
import React from "react";

export type HomeState = {
  menuShow: boolean;
  searchShow: boolean;
  basketShow: boolean;
  orderHistoryShow: boolean;
  activeCategory: string;
};
export const defaultHomeState: HomeState = {
  menuShow: false,
  searchShow: false,
  basketShow: false,
  orderHistoryShow: false,
  activeCategory: categories[0].name,  //'recommended'. Must ensure that categories from DB is already retrieved.
};

const HomeContext = React.createContext({
  homeState: defaultHomeState,
  onMenuOpen: (): void => {},
  onMenuClose: (): void => {},
  onSearchOpen: (): void => {},
  onSearchClose: (): void => {},
  onBasketShow: (): void => {},
  onBasketHide: (): void => {},
  onOrderHistoryShow: (): void => {},
  onCategoryChange: (categoryName: string): void => {},
});

export default HomeContext;
