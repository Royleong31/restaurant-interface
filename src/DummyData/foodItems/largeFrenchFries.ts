import { FoodItem } from "../dataTypes";

export const largeFrenchFries: FoodItem = {
  name: "Large French Fries",
  description:
    "Taste of our world-famous fries - fluffy inside, crispy outside.",
  img: "LargeFrenchFries.PNG",
  categories: [
    {
      name: "Appetiser",
      order: 2,
    },
    {
      name: "Others",
      order: 6,
    },
  ],
  basePrice: 4.2,
  options: [
    {
      name: "Remove from Large French Fries",
      restriction: {
        min: 0,
        max: 1,
      },
      subOptions: [
        {
          name: "Remove Salt",
          available: true,
          price: 0,
        },
      ],
    },
  ],
};
