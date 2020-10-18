import React from "react";

export const Ingredient = ({ name, amount }) => {
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  );
};
