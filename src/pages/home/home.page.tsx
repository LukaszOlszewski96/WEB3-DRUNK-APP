import { FC } from "react";

import "./home.page.css";

import { HeaderNavigation } from "../../components/navigation";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <HeaderNavigation />
      <div className="home__mainSection">
        <div className="home__mainSection__description">
          <h2>{t("common.homeMainDescription1")}</h2>
          <h2>{t("common.homeMainDescription2")}</h2>

          <div className="home__mainSection__description__buttons">
            <button>{t("common.connectWallet")}</button>
            <Link
              className="home__mainSection__description__buttons__link"
              to="/"
            >
              {t("common.createCoctail")}
            </Link>
          </div>
        </div>
        <div className="home__mainSection__image">Zdjęcie</div>
      </div>
    </div>
  );
};
