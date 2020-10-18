import React from "react";
import { Ingredient } from "./Ingredient";

export const IngredientList = ({ ingredients }) => {
  const IngredientElements = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });
  return <div className="ingredient-grid">{IngredientElements}</div>;
};
