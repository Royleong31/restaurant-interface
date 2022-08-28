import { FoodItem } from "../dataTypes";

export const doubleCheeseburgerMeal: FoodItem = {
  name: "Double Cheeseburger Meal",
  description: "For those who enjoy layers. (100% beef and melty cheese) x2.",
  img: "DoubleCheeseburgerMeal.PNG",
  categories: [
    {
      name: "Main",
      order: 3,
    },
  ],
  basePrice: 7,
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
      name: "Remove from Double Cheeseburger",
      restriction: {
        min: 0,
        max: 5,
      },
      subOptions: [
        {
          name: "Remove Mustard",
          available: true,
          price: 0,
        },
        {
          name: "Remove Ketchup",
          available: true,
          price: 0,
        },
        {
          name: "Remove Onion",
          available: true,
          price: 0,
        },
        {
          name: "Remove Pickle",
          available: true,
          price: 0,
        },
        {
          name: "Remove Cheese",
          available: true,
          price: 0,
        },
      ],
    },
  ],
};
