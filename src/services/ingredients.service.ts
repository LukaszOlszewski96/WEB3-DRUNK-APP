import { http } from "../config/axios";

export interface Ingredient {
  ingredients: [
    {
      strIngredient: string;
      strDescription: string;
    }
  ];
}

export class IngredientsData {
  static getIngredientsDetails = (nameIngredient: string | null) => {
    return http.get<Ingredient>(`search.php?i=${nameIngredient}`);
  };
}
