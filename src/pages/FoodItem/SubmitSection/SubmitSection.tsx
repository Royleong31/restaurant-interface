import React from "react";
import { SubmitSectionStyle } from "./SubmitSection.style";
import numToPrice from "../../../utils/numToPrice";

type Props = {
  totalPrice: number;
  isValid: boolean;
};

export default React.memo(function SubmitSection({
  totalPrice,
  isValid,
}: Props) {
  return (
    <SubmitSectionStyle $disabled={!isValid}>
      <input
        type="submit"
        value={`Add To Basket - ${numToPrice(totalPrice)}`}
        disabled={!isValid}
      />
    </SubmitSectionStyle>
  );
});
