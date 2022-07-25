// interface increment {
//   type: "increment";
//   payload: number;
// }

// interface decrement {
//   type: "decrement";
//   payload: number;
// }

// interface reset {
//   type: "reset";
// }

// type Action = increment | decrement | reset;   //cool trick to make Action more dynamic.

import { homeAction } from "./actions/index";

type homeState = {
  menuOpen: boolean;
  searchOpen: boolean;
  orderHistory: boolean;
  basketTab: boolean;
};

const initialState: homeState = {
  menuOpen: false,
  searchOpen: false,
  orderHistory: false,
  basketTab: false,
};

const homeUiReducer = (state: homeState = initialState, action: homeAction) => {
  switch (action.type) {
    case "openMenu":
      return (state.menuOpen = true);
    case "closeMenu":
      return (state.menuOpen = false);
    default:
      return state;
  }
};

export default homeUiReducer;
