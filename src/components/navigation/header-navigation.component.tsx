import { FC, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { BiDrink } from "react-icons/bi";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

import { NavLink } from "react-router-dom";
import { MetaMaskContext } from "../../context/metamask.context";
import { ThemeContext } from "../../context/theme.context";
import { IMetaMaskContext } from "../../types/metamask.types";
import { ShortenAddress } from "../../utils/shorten.Address";

import "./header-navigation.component.css";

export const HeaderNavigation: FC = () => {
  const { mode, toggle } = useContext(ThemeContext);
  const { contract, connectMetaMask } = useContext(
    MetaMaskContext
  ) as IMetaMaskContext;

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const [language, setLanguage] = useState<string>(i18n.language);

  const updateUserLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage(language);
    console.log(language);
  };

  return (
    <div className="headerNavigation">
      <div className="headerNavigation__header">
        <div className="headerNavigation__logo">
          <NavLink to="/" end>
            <BiDrink className="headerNavigation__logo__icon" />
          </NavLink>
        </div>
        <div className="headerNavigation__navigation">
          <NavLink
            className="headerNavigation__navigation__links"
            to="/coctail"
          >
            {t("common.coctails")}
          </NavLink>
          <NavLink className="headerNavigation__navigation__links" to="/">
            {t("common.discordBot")}
          </NavLink>
          <NavLink className="headerNavigation__navigation__links" to="/create">
            {t("common.createDrink")}
          </NavLink>
          <div className="headerNavigation__navigation__settings">
            <button onClick={toggle}>
              {mode === "dark" ? (
                <MdOutlineLightMode className="headerNavigation__navigation__settings__icon" />
              ) : (
                <MdOutlineNightlight className="headerNavigation__navigation__settings__icon" />
              )}
            </button>
            {language === "en" ? (
              <button onClick={() => updateUserLanguage("pl")}>PL</button>
            ) : (
              <button onClick={() => updateUserLanguage("en")}>ENG</button>
            )}
          </div>
          {contract ? (
            <button className="headerNavigation__navigation__button">
              <p>Logout:</p>
              <p>{ShortenAddress(contract)}</p>
            </button>
          ) : (
            <button
              className="headerNavigation__navigation__button"
              onClick={connectMetaMask}
            >
              {t("common.connectWallet")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
