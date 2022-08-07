import { Option, FoodItem } from "../dataTypes";

const mcSpicySides: Option = {
  name: "Sides",
  restriction: {
    min: 1,
    max: 1,
  },
  subOptions: [
    {
      name: "Roasted Sesame & Seaweed McShaker Fries",
      available: true,
      price: 1.2,
    },
    {
      name: "Large French Fries",
      available: false,
      price: 0,
    },
  ],
};
const mcSpicyDrinks: Option = {
  name: "Drinks",
  restriction: {
    min: 1,
    max: 1,
  },
  subOptions: [
    {
      name: "Coke Original Taste Less Sugar \nMedium",
      available: true,
      price: 0,
    },
    {
      name: "Coke Original Taste Less Sugar \nLarge",
      available: true,
      price: 1.0,
    },
  ],
};
const mcSpicyRemove: Option = {
  name: "Remove From McSpicy",
  restriction: {
    min: 0,
    max: 2,
  },
  subOptions: [
    {
      name: "Remove McChicken Sauce",
      available: true,
      price: 0,
    },
    {
      name: "Remove Shredded Lettuce",
      available: true,
      price: 0,
    },
    {
      name: "Remove McSpicy Patty",
      available: true,
      price: 0,
    },
  ],
};
export const mcSpicy: FoodItem = {
  name: "McSpicy® Meal",
  description: "A spicy, iconic favourite. Made for Singapore since 1999.",
  img: "McSpicyPhoto.png",
  categories: [
    {
      name: "Recommended",
      order: 1,
    },
    {
      name: "Main",
      order: 3,
    },
  ],
  basePrice: 8.6,
  options: [mcSpicySides, mcSpicyDrinks, mcSpicyRemove],
};
