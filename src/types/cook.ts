export type Ingredient = {
  name: string;
  type: string;
};

export type Food = {
  name: string;
  ingredients: string[];
  habilities: string[];
  level: string;
  time: string;
  myLevel1To10: number;
  isLunch: boolean;
  isDinner: boolean;
  isBreakfast: boolean;
};