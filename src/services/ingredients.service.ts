import { http } from "../config/axios";

export interface Ingredient {
  ingredients: [
    {
      strIngredient: string | undefined;
      strDescription: string | undefined;
    }
  ];
}

export class IngredientsData {
  static getIngredientsDetails = (nameIngredient: string | null) => {
    return http.get<Ingredient>(`search.php?i=${nameIngredient}`);
  };
}
