import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
  Home page has multiple UI components.
  This slice will determine whether
  Menu is open?
  Search is shown?  //Maybe I should use navigate() to just change to the search page. Search is kind of like a separate page, not on home page?
  Basket Tab at bottom of screen is shown?  //this state is dependent on cartState. if(cartState.items[].length !== 0) basketItemExists = true; cartSlice not yet implemented.
  Order history icon is shown?  //After customer places order, icon on homepage will appear to view order history.

  no PayloadAction for any of the reducers. Just toggling true/false.
*/

export interface HomeState {
  menuShow: boolean;
  searchShow: boolean;
  basketItemExists: boolean;
  orderHistoryExists: boolean;
}

const initialState: HomeState = {
  menuShow: false,
  searchShow: false,
  basketItemExists: false,
  orderHistoryExists: false,
};

const authSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    onMenuOpen: (state: HomeState) => {
      return {
        ...state,
        menuShow: true,
        error: "",
      };
    },
    onMenuClose: (state: HomeState) => {
      return {
        ...state,
        menuShow: false,
        error: "",
      };
    },
    onSearchOpen: (state: HomeState) => {
      return {
        ...state,
        searchShow: false,
        error: "",
      };
    },
    onSearchClose: (state: HomeState) => {
      return {
        ...state,
        searchShow: false,
        error: "",
      };
    },
    onBasketNotEmpty: (state: HomeState) => {
      return {
        ...state,
        basketItemExists: true,
        error: "",
      };
    },
    onBasketEmpty: (state: HomeState) => {
      return {
        ...state,
        basketItemExists: false,
        error: "",
      };
    },
    onNewOrder: (state: HomeState) => {
      return {
        ...state,
        orderHistoryExists: true,
        error: "",
      };
    },
    //orderHistoryExists will never be set to false. Don't need reducer.
  },
});

export const {
  onMenuOpen,
  onMenuClose,
  onSearchOpen,
  onSearchClose,
  onBasketNotEmpty,
  onBasketEmpty,
  onNewOrder,
} = authSlice.actions;

export default authSlice.reducer;
