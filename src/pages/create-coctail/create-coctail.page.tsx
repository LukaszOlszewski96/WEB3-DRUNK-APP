import { FC } from "react";
import { useTranslation } from "react-i18next";

import { HeaderNavigation } from "../../components/navigation";

import "./create-coctail.page.css";

export const CreateCoctail: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="createCoctail">
      <HeaderNavigation />
      <div className="createCoctail__margin">
        <div className="createCoctail__margin__container">
          <h1>{t("common.createYourDrink")}</h1>
          <div className="createCoctail__margin__container__form">
            <div className="createCoctail__margin__container__form__image">
              <img src="" />
            </div>
            <div className="createCoctail__margin__container__form__input">
              <input type="text" placeholder="Link to asset" />
              <input type="text" placeholder="Name" />
              <textarea placeholder="Description NFT" />
              <button>Mint NFT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
