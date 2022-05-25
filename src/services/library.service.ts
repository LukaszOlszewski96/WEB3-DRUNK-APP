import { collection, setDoc, getDocs, doc } from "firebase/firestore";
import { firestore } from "../config/firebase";
import { IFirebaseLib } from "../types/global.types";

export class LibraryData {
  static sendCoctailToLib = (data: IFirebaseLib | null, userContract: any) => {
    // const collectionRef = collection(firestore, "Library");
    // return addDoc(collectionRef, {
    //   idDrink: data?.idDrink,
    //   strDrink: data?.strDrink,
    //   strCategory: data?.strCategory,
    //   strGlass: data?.strGlass,
    //   strInstructions: data?.strInstructions,
    //   strDrinkThumb: data?.strDrinkThumb,
    // });
    return setDoc(doc(firestore, "Library", `${userContract}`), {
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
