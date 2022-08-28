import React from "react";
import { FooterStyle } from "./Footer.style";

type Props = {};

//conditionally rendered when cart has items. CartState notEmpty().
//Clicking on this button will open up the basket page. Basket page contents will depend on CartState.
//CartState is app-wide state. Get from database, not redux.

export default function ViewBasket({}: Props) {
  return (
    <FooterStyle>
      <button
        onClick={() => {
          /* Open basket page */
        }}
      >
        <p>
          Basket <span> • </span> 1 Item
        </p>
        <p>S$9.60</p>
      </button>
    </FooterStyle>
  );
}
