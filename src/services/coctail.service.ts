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

export class CoctailData {
  static getCoctailDetails = (coctailID: string | null) => {
    return http.get<Coctail>(`lookup.php?i=${coctailID}`);
  };
  static getCoctailByName = (coctailName: string) => {
    return http.get<Coctail>(`search.php?s=${coctailName}`);
  };
  static getCoctailByLetter = (coctailLetter: string) => {
    return http.get<Coctail>(`search.php?f=${coctailLetter}`);
  };
}
