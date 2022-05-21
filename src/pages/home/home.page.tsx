import { FC } from "react";

import "./home.page.css";

import { HeaderNavigation } from "../../components/navigation";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <div className="home">
      <HeaderNavigation />
      <div className="home__mainSection">
        <div className="home__mainSection__description">
          <h2>The moon is made of pancakes.</h2>
          <h2>
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </h2>

          <div className="home__mainSection__description__buttons">
            <button>Conncet Wallet</button>
            <Link
              className="home__mainSection__description__buttons__link"
              to="/"
            >
              Create Coctail
            </Link>
          </div>
        </div>
        <div className="home__mainSection__image">Zdjęcie</div>
      </div>
    </div>
  );
};
