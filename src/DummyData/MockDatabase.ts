import { FoodItem } from "./dataTypes";
import { mcSpicy } from "./foodItems/mcSpicy";
import { ovaltineMcFlurry } from "./foodItems/ovaltineMcFlurry";
import { pulutHitamPie } from "./foodItems/pulutHitamPie";
import { twoPcMcCrispySpicyUpsizedMeal } from "./foodItems/2pcMcCrispySpicyUpsizedMeal";
import { largeFrenchFries } from "./foodItems/largeFrenchFries";
import { oreoMcFlurry } from "./foodItems/oreoMcFlurry";
import { caramelFrappeWithOreoMedium } from "./foodItems/caramelFrappeWithOreoMedium";
import { filetOFishMeal } from "./foodItems/filetOFishMeal";
import { doubleCheeseburgerMeal } from "./foodItems/doubleCheeseburgerMeal";

const mockDatabase: FoodItem[] = [
  mcSpicy,
  oreoMcFlurry,
  doubleCheeseburgerMeal,
  largeFrenchFries,
  filetOFishMeal,
  caramelFrappeWithOreoMedium,
  twoPcMcCrispySpicyUpsizedMeal,
  ovaltineMcFlurry,
  pulutHitamPie,
];

export default mockDatabase;
