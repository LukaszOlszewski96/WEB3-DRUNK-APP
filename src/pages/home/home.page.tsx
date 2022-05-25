import { FC, useContext } from "react";

import "./home.page.css";

import { HeaderNavigation } from "../../components/navigation";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IMetaMaskContext } from "../../types/metamask.types";
import { MetaMaskContext } from "../../context/metamask.context";

export const Home: FC = () => {
  const { t } = useTranslation();

  const { contract, connectMetaMask } = useContext(
    MetaMaskContext
  ) as IMetaMaskContext;

  const checkAccess = () => {
    if (!contract) {
      alert(t("common.youMustLogin"));
    }
  };

  return (
    <div className="home">
      <HeaderNavigation />
      <div className="home__mainSection">
        <div className="home__mainSection__description">
          <h2>{t("common.homeMainDescription1")}</h2>
          <h2>{t("common.homeMainDescription2")}</h2>

          <div className="home__mainSection__description__buttons">
            <button
              className="headerNavigation__navigation__button"
              onClick={connectMetaMask}
            >
              {t("common.connectWallet")}
            </button>
            <Link
              className="home__mainSection__description__buttons__link"
              to="/library"
              onClick={checkAccess}
            >
              {t("common.library")}
            </Link>
          </div>
        </div>
        <div className="home__mainSection__image">
          <h1>open</h1>
          <img src="./neon.png" alt="neon" />
        </div>
      </div>
    </div>
  );
};
