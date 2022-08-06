import React from "react";
import { SubmitSectionStyle } from "./SubmitSection.style";

type Props = {
  totalPrice: number;
};

export default function SubmitSection({ totalPrice }: Props) {
  return (
    <SubmitSectionStyle>
      <input type="submit" value={`Add To Basket - ${totalPrice}`} />
    </SubmitSectionStyle>
  );
}
