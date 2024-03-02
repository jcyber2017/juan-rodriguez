import type { Food, Ingredient } from "types/cook"

export const INGREDIENTS: Ingredient[] = [
  {name: 'Rice', type: 'carbohydrate'},
  {name: 'Chicken', type: 'protein'},
  {name: 'Egg', type: 'protein'},
  {name: 'Garlic', type: 'vegetable'},
  {name: 'Ginger', type: 'vegetable'},
  {name: 'Chives', type: 'vegetable'},
  {name: 'Oliva oil', type: 'fat'},
  {name: 'Salt', type: 'mineral'},
  {name: 'Soy sauce', type: 'sauce'},
  {name: 'Onion', type: 'vegetable'},
  {name: 'Peppers', type: 'vegetable'},
  {name: 'Oat', type: 'carbohydrate'},
  {name: 'Milk', type: 'protein'},
  {name: 'Sugar', type: 'carbohydrate'},
  {name: 'Cinnamon', type: 'spice'},
  {name: 'Corn flour', type: 'carbohydrate'},
  {name: 'Water', type: 'mineral'},
  {name: 'Self-rising flour', type: 'carbohydrate'},
  {name: 'Cheese', type: 'protein'},
  {name: 'Cereal', type: 'carbohydrate'}
]

const FOODS: Food[] = [
  {
    name: 'Chaufa',
    ingredients: [
      'Rice',
      'Chicken',
      'Egg',
      'Garlic',
      'Ginger',
      'Chives',
      'Oliva oil',
      'Salt',
      'Soy sauce'
    ],
    habilities: [
      'Cook rice',
      'Fry chicken',
      'Fry egg',
      'Fry hot dog'
    ],
    level: 'moderate',
    time: '40 minutes',
    myLevel1To10: 7,
    isLunch: true,
    isDinner: true,
    isBreakfast: false
  }, {
    name: 'Pollo saltado',
    ingredients: [
      'Chicken',
      'Onion',
      'Soy sauce',
      'Garlic',
      'Peppers'
    ],
    habilities: [
      'Cook rice',
      'Fry chicken'
    ],
    level: 'easy',
    time: '30 minutes',
    myLevel1To10: 7,
    isLunch: true,
    isDinner: true,
    isBreakfast: false
  }, {
    name: 'Avena',
    ingredients: [
      'Oat',
      'Milk',
      'Sugar',
      'Cinnamon'
    ],
    habilities: [
      'Boil milk'
    ],
    level: 'easy',
    time: '10 minutes',
    myLevel1To10: 8,
    isLunch: false,
    isDinner: true,
    isBreakfast: true
  }, {
    name: 'Arepa',
    ingredients: [
      'Corn flour',
      'Water',
      'Salt'
    ],
    habilities: [
      'Mix Corn flour with water'
    ],
    level: 'easy',
    time: '30 minutes',
    myLevel1To10: 8,
    isLunch: false,
    isDinner: true,
    isBreakfast: true
  }, {
    name: 'Pancakes',
    ingredients: [
      'Self-rising flour',
      'Milk',
      'Egg',
      'Sugar'
    ],
    habilities: [
      'Make Pancakes mix'
    ],
    level: 'easy',
    time: '20 minutes',
    myLevel1To10: 7,
    isLunch: false,
    isDinner: true,
    isBreakfast: true
  }, {
    name: 'Cereal',
    ingredients: [
      'Milk',
      'Cereal'
    ],
    habilities: [
      'Pour milk into a bowl'
    ],
    level: 'super easy',
    time: '3 minutes',
    myLevel1To10: 10,
    isLunch: false,
    isDinner: true,
    isBreakfast: true
  }, {
    name: 'Empanadas',
    ingredients: [
      'Corn flour',
      'Water',
      'Salt',
      'Cheese'
    ],
    habilities: [
      'Mix Corn flour with water'
    ],
    level: 'easy',
    time: '30 minutes',
    myLevel1To10: 8,
    isLunch: false,
    isDinner: true,
    isBreakfast: true
  }
];

export default FOODS;
