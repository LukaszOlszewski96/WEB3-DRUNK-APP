import axios from "axios";
import { ChangeEvent, FC, useState } from "react";
import { BiDrink } from "react-icons/bi";
import { PhotoGalleryCard } from "../../components/masonry";

import { HeaderNavigation } from "../../components/navigation";

import "./coctail.page.css";

export const Coctail: FC = () => {
  const [coctails, setCoctails] = useState<[]>([]);
  const [coctailName, setCoctailsName] = useState<string>("");

  const handleCoctailName = (e: ChangeEvent<HTMLInputElement>) => {
    setCoctailsName(e.target.value);
  };

  const searchCoctailName = async () => {
    try {
      if (coctailName.length > 1) {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctailName}`
        );
        setCoctails(response.data.drinks);
      } else {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${coctailName}`
        );
        setCoctails(response.data.drinks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      searchCoctailName();
      e.preventDefault();
    }
  };

  return (
    <div className="coctail">
      <HeaderNavigation />
      <div className="coctail__header">
        <h1>Znajdź kolejny pomysł na dzisiejszego drinka</h1>
        <form className="coctail__header__form">
          <button
            className="coctail__header__form__button"
            type="button"
            onClick={searchCoctailName}
          >
            <BiDrink />
          </button>
          <input
            onChange={handleCoctailName}
            type="text"
            className="coctail__header__form__search"
            placeholder="Search your drink..."
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>
      <PhotoGalleryCard coctails={coctails} />
    </div>
  );
};
