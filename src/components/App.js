import React, { useState, useEffect } from "react";
import { RecipeList } from "./RecipeList";
import { RecipeEdit } from "./RecipeEdit";
import "../css/app.css";
import { v4 as uuid } from "uuid";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingReact.recipes";

export const App = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(recipesSample);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipesJSON !== null) setRecipes(JSON.parse(recipesJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

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

    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
    console.log("Delete", id);
  };

  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
    console.log("Select", id);
  };

  const handleRecipeChange = (id, recipe) => {
    const newRecipes = [...recipes]; // copy array
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe; // adding new recipe
    setRecipes(newRecipes); // uppdaterar recipes
  };

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipeId && <RecipeEdit recipe={selectedRecipe} />}
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
