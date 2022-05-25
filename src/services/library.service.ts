import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../config/firebase";
import { IFirebaseLib } from "../types/global.types";

export class LibraryData {
  static sendCoctailToLib = (data: IFirebaseLib | null) => {
    const collectionRef = collection(firestore, "Library");
    return addDoc(collectionRef, {
      idDrink: data?.idDrink,
      strDrink: data?.strDrink,
      strCategory: data?.strCategory,
      strGlass: data?.strGlass,
      strInstructions: data?.strInstructions,
      strDrinkThumb: data?.strDrinkThumb,
    });
  };

  static getLibCoctails = () => {
    const collectionRef = collection(firestore, "Library");
    return getDocs(collectionRef);
  };
}
