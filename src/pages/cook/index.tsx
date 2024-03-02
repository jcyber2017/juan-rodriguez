import React from "react";

import FOODS from "data/foods";
import { Food } from "types/cook";
import TreeMapSquares from "components/atoms/TreeMapSquares";

type MapUsage = {
  [key: string]: number;
};

const getIngredientsUsage = (foods: Food[]): MapUsage => {
  const usage: MapUsage = {};
  foods.forEach((food) => {
    food.ingredients.forEach((ingredient) => {
      if (!usage[ingredient]) {
        usage[ingredient] = 0;
      }
      usage[ingredient] += 1;
    });
  });
  return usage;
};

const Cook = () => {
  const usage = getIngredientsUsage(FOODS);
  const ingredients = Object.keys(usage);
  const width = 600;
  const height = 350;
  return (
    <div>
      <TreeMapSquares
        labels={ingredients}
        values={Object.values(usage)}
        width={width}
        height={height} />
    </div>
  );
};

export default Cook;
