import axios from "axios";
import { ChangeEvent, FC, useState } from "react";
import { BiDrink } from "react-icons/bi";

import { HeaderNavigation } from "../../components/navigation";

import "./coctail.page.css";

export const Coctail: FC = () => {
  const [_coctails, _setCoctails] = useState<[]>([]);
  const [coctailName, setCoctailsName] = useState<string>("");

  const handleCoctailName = (e: ChangeEvent<HTMLInputElement>) => {
    setCoctailsName(e.target.value);
  };

  const searchCoctailName = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${coctailName}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
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
          />
        </form>
      </div>
    </div>
  );
};
