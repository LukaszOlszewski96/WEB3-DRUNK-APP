import { FC } from "react";
import { SiEthereum } from "react-icons/si";

import { HeaderNavigation } from "../../components/navigation";

import "./coctail-details.page.css";

export const CoctailDetails: FC = () => {
  return (
    <div className="coctailDetails">
      <HeaderNavigation />
      <div className="coctailDetails__container__margin">
        <div className="coctailDetails__container">
          <div className="coctailDetails__containe__image">
            <div className="coctailDetails__containe__header">
              <SiEthereum />
            </div>
            <img src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" />
          </div>
          <div className="coctailDetails__container__card">
            <h1>Tytuł</h1>
            <div>Przepis</div>
          </div>
        </div>
      </div>
    </div>
  );
};
