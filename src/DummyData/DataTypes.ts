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
};


