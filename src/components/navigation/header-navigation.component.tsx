import { FC, useState } from "react";

import { BiDrink } from "react-icons/bi";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

import { NavLink } from "react-router-dom";

import "./header-navigation.component.css";

export const HeaderNavigation: FC = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);

  const changeDisplayColorMode = () => {
    setDarkMode((prev) => !prev);
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
          <NavLink className="headerNavigation__navigation__links" to="/">
            Roadmap
          </NavLink>
          <NavLink className="headerNavigation__navigation__links" to="/">
            Discord Bot
          </NavLink>
          <NavLink className="headerNavigation__navigation__links" to="/">
            Create Dring
          </NavLink>
          <div className="headerNavigation__navigation__settings">
            <button onClick={changeDisplayColorMode}>
              {isDarkMode ? (
                <MdOutlineLightMode className="headerNavigation__navigation__settings__icon" />
              ) : (
                <MdOutlineNightlight className="headerNavigation__navigation__settings__icon" />
              )}
            </button>
            <button>ENG</button>
          </div>
          <button className="headerNavigation__navigation__button">
            Connect MetaMask
          </button>
        </div>
      </div>
    </div>
  );
};
