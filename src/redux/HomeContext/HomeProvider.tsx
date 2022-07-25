import React, { useReducer } from "react";
import HomeContext, { HomeState, defaultHomeState } from "./HomeContext";
import { ActionType, Action } from "./ActionType";

type Props = {
  children: React.ReactNode;
};

const homeReducer = (state: HomeState, action: Action): HomeState => {
  switch (action.type) {
    case ActionType.CLOSEMENU: {
      const updatedHomeState = { ...state };
      updatedHomeState.menuShow = false;
      return updatedHomeState;
    }
    case ActionType.OPENMENU: {
      const updatedHomeState = { ...state };
      updatedHomeState.menuShow = true;
      return updatedHomeState;
    }
    case ActionType.CLOSESEARCH: {
      const updatedHomeState = { ...state };
      updatedHomeState.searchShow = false;
      return updatedHomeState;
    }
    case ActionType.OPENSEARCH: {
      const updatedHomeState = { ...state };
      updatedHomeState.menuShow = true;
      return updatedHomeState;
    }
    case ActionType.SHOWBASKET: {
      const updatedHomeState = { ...state };
      updatedHomeState.basketShow = true;
      return updatedHomeState;
    }
    case ActionType.HIDEBASKET: {
      const updatedHomeState = { ...state };
      updatedHomeState.basketShow = false;
      return updatedHomeState;
    }
    case ActionType.SHOWORDERS: {
      const updatedHomeState = { ...state };
      updatedHomeState.orderHistoryShow = true;
      return updatedHomeState;
    }
    case ActionType.UPDATECATEGORY: {
      const updatedHomeState = { ...state };
      updatedHomeState.activeCategory = action.payload;
      return updatedHomeState;
    }
    default:
      return state;
  }
};

export default function HomeProvider({ children }: Props) {
  const [homeState, dispatchHomeAction] = useReducer(
    homeReducer,
    defaultHomeState
  );
  const openMenu = () => {
    dispatchHomeAction({ type: ActionType.OPENMENU });
  };
  const closeMenu = () => {
    dispatchHomeAction({ type: ActionType.CLOSEMENU });
  };
  const openSearch = () => {
    dispatchHomeAction({ type: ActionType.OPENSEARCH });
  };
  const closeSearch = () => {
    dispatchHomeAction({ type: ActionType.CLOSESEARCH });
  };
  const showBasket = () => {
    dispatchHomeAction({ type: ActionType.SHOWBASKET });
  };
  const hideBasket = () => {
    dispatchHomeAction({ type: ActionType.HIDEBASKET });
  };
  const showOrderHistory = () => {
    dispatchHomeAction({ type: ActionType.SHOWORDERS });
  };
  const updateCategory = (categoryName: string) => {
    dispatchHomeAction({
      type: ActionType.UPDATECATEGORY,
      payload: categoryName,
    });
  };

  const homeContext = {
    homeState: {
      menuShow: homeState.menuShow,
      searchShow: homeState.searchShow,
      basketShow: homeState.basketShow,
      orderHistoryShow: homeState.orderHistoryShow,
      activeCategory: homeState.activeCategory,
    },
    onMenuOpen: openMenu,
    onMenuClose: closeMenu,
    onSearchOpen: openSearch,
    onSearchClose: closeSearch,
    onBasketShow: showBasket,
    onBasketHide: hideBasket,
    onOrderHistoryShow: showOrderHistory,
    onCategoryChange: updateCategory,
  };

  return (
    <HomeContext.Provider value={homeContext}>{children}</HomeContext.Provider>
  );
}
