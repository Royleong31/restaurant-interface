
export type FoodItem = {
  name: string;
  description: string;
  categories: Category[]; //separate table
  basePrice: number;
  img: string;
  options: Option[];
};
export type Category = {
  name: string;
  order: number; //arranged from smallest to largest. Recommended first, then appetiser, drinks last.
};
export type Option = {
  name: string;
  restriction: {
    min: number;
    max: number;
  };
  subOptions: SubOption[];
};
export type SubOption = {
  name: string;
  available: boolean;
  price: number;
}


const McSpicySides: Option = {
  name: "Sides",
  restriction: {
    min: 1,
    max: 1,
  },
  subOptions: [
    {
      name: "Roasted Sesame & Seaweed McShaker Fries",
      available: true,
      price: 0,
    },
    {
      name: "Large French Fries",
      available: false,
      price: 0,
    },
  ],
};
const McSpicyDrinks: Option = {
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
      price: 0.0,
    },
  ],
};
const McSpicyRemove: Option = {
  name: "Remove From McSpicy",
  restriction: {
    min: 0,
    max: 3,
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
export const McSpicy: FoodItem = {
  name: "McSpicyMeal",
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
  basePrice: 9.6,
  options: [McSpicySides, McSpicyDrinks, McSpicyRemove],
};


export const Categories: Category[] = [
  {
    name: "Recommended",
    order: 1,
  },
  {
    name: "Appetiser",
    order: 2,
  },
  {
    name: "Main",
    order: 3,
  },
  {
    name: "Dessert",
    order: 4,
  },
  {
    name: "Drinks",
    order: 5,
  },
  {
    name: "Others",
    order: 6,
  },
]