import { FoodItem } from "../dataTypes";

export const caramelFrappeWithOreoMedium: FoodItem = {
  name: "Caramel Frappe With Oreo® Medium",
  description:
    "(M). Caramel with a hint of coffee, blended with ice & Oreo cookie bits. Topped with caramel drizzle and whipped cream.",
  img: "CaramelFrappeWithOreoMedium.PNG",
  categories: [
    {
      name: "Dessert",
      order: 4,
    },
    {
      name: "Drinks",
      order: 5,
    },
  ],
  basePrice: 5.45,
  options: [
    {
      name: "Remove from Caramel Frappe with Oreo® Medium",
      restriction: {
        min: 0,
        max: 3,
      },
      subOptions: [
        {
          name: "Remove Caramel Topping",
          available: true,
          price: 0,
        },
        {
          name: "Remove Whip Cream",
          available: true,
          price: 0,
        },
        {
          name: "Remove Oreo® Cookie Bits",
          available: true,
          price: 0,
        },
      ],
    },
  ],
};
