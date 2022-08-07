import { FoodItem } from "../dataTypes";

export const twoPcMcCrispySpicyUpsizedMeal: FoodItem = {
  name: "2pc McCrispy® Spicy Upsized Meal",
  description:
    "It's crunch time. Meal includes 2pc Chicken McCrispy® (Spicy), L Fries, M Coke",
  img: "McCrispySpicyUpsizedMeal.PNG",
  categories: [
    {
      name: "Recommended",
      order: 1,
    },
  ],
  basePrice: 10.3,
  options: [
    {
      name: "Sides",
      restriction: {
        min: 1,
        max: 1,
      },
      subOptions: [
        {
          name: "Large French Fries",
          available: true,
          price: 0,
        },
      ],
    },
    {
      name: "Drink",
      restriction: {
        min: 1,
        max: 1,
      },
      subOptions: [
        {
          name: "Teh C Frappe Small",
          available: true,
          price: 1.7,
        },
        {
          name: "Teh C Frappe Medium",
          available: true,
          price: 2.2,
        },
        {
          name: "Mocha Frappe Small",
          available: true,
          price: 1.2,
        },
        {
          name: "Mocha Frappe Medium",
          available: true,
          price: 1.7,
        },
        {
          name: "Caramel Frappe Small",
          available: true,
          price: 1.2,
        },
        {
          name: "Caramel Frappe Medium",
          available: true,
          price: 1.7,
        },
        {
          name: "Coke Original Taste Less Sugar Medium",
          available: true,
          price: 0,
        },
        {
          name: "Coke Original Taste Less Sugar Large",
          available: true,
          price: 0.45,
        },
        {
          name: "Tea with Milk",
          available: true,
          price: 0,
        },
        {
          name: "Hot Milo",
          available: true,
          price: 0,
        },
      ],
    },
    {
      name: "Add-On",
      restriction: {
        min: 0,
        max: 1,
      },
      subOptions: [
        {
          name: "Sweet and Spicy Chicken Cutlet (1pc)",
          available: true,
          price: 2.4,
        },
        {
          name: "Chicken McCrispy (1pc) Spicy",
          available: true,
          price: 2.4,
        },
      ],
    },
  ],
};
