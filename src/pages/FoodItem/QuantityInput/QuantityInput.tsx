import React, { useState } from "react";
import { useFormContext, useController } from "react-hook-form";
import { OperatorButton } from "./OperatorButton.style";
import QuantityIcon from "./QuantityIcon";
import { QuantityInputStyle } from "./QuantityInput.style";

type Props = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export default React.memo(function QuantityInput({
  quantity,
  setQuantity,
}: Props) {
  const [disableDecrement, setDisableDecrement] = useState(true);
  const { control } = useFormContext();
  const {
    field: { onChange },
  } = useController({
    name: `quantity`,
    control: control,
  });

  const clickHandler = (action: "increment" | "decrement"): void => {
    switch (action) {
      case "increment":
        if (quantity === 1) setDisableDecrement(false);
        onChange(quantity + 1); //update form state
        setQuantity(quantity + 1); //update local state
        break;
      case "decrement":
        if (quantity === 1) {
          setDisableDecrement(true);
          break;
        } else if (quantity === 2) setDisableDecrement(true);
        onChange(quantity - 1);
        setQuantity(quantity - 1);
        break;
    }
  };

  return (
    <QuantityInputStyle>
      <OperatorButton
        onClick={() => clickHandler("decrement")}
        type="button"
        $disabled={disableDecrement}
        $src="/svgs/MinusIcon.svg"
      />

      <QuantityIcon quantity={quantity} />

      <OperatorButton
        onClick={() => clickHandler("increment")}
        type="button"
        $src="/svgs/PlusIcon.svg"
      />
    </QuantityInputStyle>
  );
});
