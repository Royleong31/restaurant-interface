import { string } from "yup";

export enum ActionType {
  OPENMENU = "openMenu",
  CLOSEMENU = "closeMenu",
  OPENSEARCH = "openSearch",
  CLOSESEARCH = "closeSearch",
  SHOWBASKET = "showBasket",
  HIDEBASKET = "hideBasket",
  SHOWORDERS = "showOrders",
  UPDATECATEGORY = "updateCategory",
}

interface openMenuAction {
  type: ActionType.OPENMENU;
}
interface closeMenuAction {
  type: ActionType.CLOSEMENU;
}
interface openSearchAction {
  type: ActionType.OPENSEARCH;
}
interface closeSearchAction {
  type: ActionType.CLOSESEARCH;
}
interface showBasketAction {
  type: ActionType.SHOWBASKET;
}
interface hideBasketAction {
  type: ActionType.HIDEBASKET;
}
interface showOrdersAction {
  type: ActionType.SHOWORDERS;
}

interface updateCategoryAction {
  type: ActionType.UPDATECATEGORY;
  payload: string;
}

export type Action =
  | openMenuAction
  | closeMenuAction
  | openSearchAction
  | closeSearchAction
  | showBasketAction
  | hideBasketAction
  | showOrdersAction
  | updateCategoryAction;
