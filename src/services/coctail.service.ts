import { http } from "../config/axios";

export interface Coctail {
  drinks: [
    {
      strDrink: any;
      strCategory: any;
      strGlass: any;
      strAlcoholic: any;
      strInstructions: any;
      strDrinkThumb: any;
    }
  ];
}

export class CoctaiData {
  static getCoctailDetails = (coctailID: string | null) => {
    return http.get<Coctail>(`lookup.php?i=${coctailID}`);
  };
}
