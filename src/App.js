import React from "react";
import { RecipeList } from "./RecipeList";

export const App = () => {
  return (
    <>
      <RecipeList recipes={recipesSample} />
    </>
  );
};

const recipesSample = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1. Chicken\n2. Chicken\n3. Chicken",
  },
  {
    id: 1,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Pork\n2. Pork\n3. Pork",
  },
];
