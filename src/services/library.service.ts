import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";
import { IFirebaseLib } from "../types/global.types";

export class LibraryData {
  static sendCoctailToLib = (data: IFirebaseLib | null, userContract: any) => {
    const docRef = doc(firestore, "Library", `${userContract}`);
    const collRef = collection(docRef, "Coctails");
    return addDoc(collRef, {
      idDrink: data?.idDrink,
      strDrink: data?.strDrink,
      strCategory: data?.strCategory,
      strGlass: data?.strGlass,
      strInstructions: data?.strInstructions,
      strDrinkThumb: data?.strDrinkThumb,
    });
  };

  static getLibCoctails = (userContract: any) => {
    const collectionRef = collection(
      firestore,
      "Library",
      `${userContract}`,
      "Coctails"
    );
    return getDocs(collectionRef);
  };
}
