import { FoodItem } from "../dataTypes";

export const filetOFishMeal: FoodItem = {
  name: "Filet-O-Fish® Meal",
  description:
    "Top-selling fish burger in Singapore: White-fish filet, tartar sauce, half slice of cheese, tender steamed buns.",
  img: "FiletOFishMeal.PNG",
  categories: [
    {
      name: "Main",
      order: 3,
    },
  ],
  basePrice: 6.85,
  options: [
    {
      name: "Sides",
      restriction: {
        min: 1,
        max: 1,
      },
      subOptions: [
        {
          name: "Medium French Fries",
          available: true,
          price: 0,
        },
        {
          name: "Corn Cup (5oz)",
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
    {
      name: "Remove from Filet-O-Fish",
      restriction: {
        min: 0,
        max: 3,
      },
      subOptions: [
        {
          name: "Remove Tartar Sauce",
          available: true,
          price: 0,
        },
        {
          name: "Remove Cheese",
          available: true,
          price: 0,
        },
        {
          name: "Remove Fish Portion",
          available: true,
          price: 0,
        },
      ],
    },
  ],
};
