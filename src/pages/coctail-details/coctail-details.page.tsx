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
            <h1>Mochito</h1>
            <h3>0xbc4c...f13d</h3>
            <div className="coctailDetails__container__card__properties">
              <div className="coctailDetails__container__card__properties__box">
                <p>Category</p>
                <p>Category</p>
              </div>
              <div className="coctailDetails__container__card__properties__box">
                <p>Glass to use</p>
                <p>Glass to use</p>
              </div>

              <div className="coctailDetails__container__card__properties__box">
                <p>Type</p>
                <p>Type</p>
              </div>
            </div>
            <div className="coctailDetails__container__card__preparation">
              <div className="coctailDetails__container__card__preparation__row">
                <p className="coctailDetails__container__card__preparation__rowTitle">
                  Składniki:
                </p>
                <ul>
                  <li className="coctailDetails__container__card__preparation__rowText">
                    Gin
                  </li>
                  <li className="coctailDetails__container__card__preparation__rowText">
                    Cola
                  </li>
                </ul>
              </div>
              <div className="coctailDetails__container__card__preparation__row">
                <p className="coctailDetails__container__card__preparation__rowTitle">
                  Instrukcja:
                </p>
                <p className="coctailDetails__container__card__preparation__rowText">
                  2022.01.23 | Tytuł wiadomości Faucibus suspendisse justo,
                  congue viverra molestie ultrices ac. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Faucibus suspendisse justo,
                  congue viverra molestie ultrices ac elementum leo. amet,
                  consectetur adipiscing elit. Faucibus suspendisse justo,
                  congue viverra molestie ultrices ac elementum leo. amet,
                  consectetur adipiscing elit. Faucibus suspendisse justo,
                  congue viverra molestie ultrices ac elementum leo. consectetur
                  adipiscing elit. Faucibus suspendisse justo, congue viverra
                  molestie ultrices ac elementum leo. adipiscing elit. Faucibus
                  suspendisse justo, congue viverra molestie ultrices ac
                  elementum leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
