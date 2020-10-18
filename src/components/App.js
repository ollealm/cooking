import React, { useState, useEffect } from "react";
import { RecipeList } from "./RecipeList";
import "../css/app.css";
import { v4 as uuid } from "uuid";

export const RecipeContext = React.createContext();

export const App = () => {
  const [recepies, setRecipies] = useState(recipesSample);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuid(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "1. New",
      ingredients: [
        {
          id: uuid(),
          name: "Name",
          amount: "1 tbs",
        },
      ],
    };

    setRecipies([...recepies, newRecipe]);
    console.log(recepies);
  };

  const handleRecipeDelete = (id) => {
    setRecipies(recepies.filter((recipe) => recipe.id !== id));
    console.log(id);
    console.log(recepies);
  };

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recepies} />
    </RecipeContext.Provider>
  );
};

const recipesSample = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Cook",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 tps",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Cook",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 tbs",
      },
    ],
  },
];
