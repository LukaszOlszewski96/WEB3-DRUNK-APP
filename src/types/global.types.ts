export interface IThemeContext {
  mode: "dark" | "light";
  toggle: () => void;
}

export interface IFirebaseLib {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strGlass: string;
  strAlcoholic: string;
  strInstructions: string;
  strDrinkThumb: string;
}
