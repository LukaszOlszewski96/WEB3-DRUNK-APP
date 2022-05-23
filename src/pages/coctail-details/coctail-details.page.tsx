import axios from "axios";
import { FC, useEffect, useState } from "react";
import { SiEthereum } from "react-icons/si";
import { useSearchParams } from "react-router-dom";

import { HeaderNavigation } from "../../components/navigation";

import "./coctail-details.page.css";

export const CoctailDetails: FC = () => {
  const [coctail, _setCoctail] = useState<any>("d");
  const [coctailName, setCoctailName] = useState<string | null>();
  const [coctailCategory, setCoctailCategory] = useState<string | null>();
  const [coctailGlass, setCoctailGlass] = useState<string | null>();
  const [coctailType, setCoctailType] = useState<string | null>();
  const [coctailIngredients, setCoctailIngredients] = useState<any[]>();
  const [coctailInstruction, setCoctailInstruction] = useState<string | null>();
  const [coctailImage, setCoctailImage] = useState<string>();
  let [searchParams] = useSearchParams();
  let coctailID = searchParams.get("id");

  const getCoctailDetails = async () => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${coctailID}`
    );
    setCoctailName(response.data.drinks[0].strDrink);
    setCoctailCategory(response.data.drinks[0].strCategory);
    setCoctailGlass(response.data.drinks[0].strGlass);
    setCoctailType(response.data.drinks[0].strAlcoholic);
    setCoctailInstruction(response.data.drinks[0].strInstructions);
    setCoctailImage(response.data.drinks[0].strDrinkThumb);
    console.log(response);

    const drinks = Object.keys(response.data.drinks[0])
      .filter((key) => key.match(/ingredient/i))
      .filter(
        (key) =>
          !!response.data.drinks[0][key] || response.data.drinks[0][key] === " "
      )
      .map((key) => response.data.drinks[0][key].trim());

    const measures = Object.keys(response.data)
      .filter((key) => key.match(/measure/i))
      .filter(
        (key) =>
          !!response.data.drinks[0][key] || response.data.drinks[0][key] === " "
      )
      .map((key) => response.data.drinks[0][key].trim());

    const ingredients = drinks.map((_item, index) => {
      return { drink: drinks[index], measure: measures[index] };
    });
    setCoctailIngredients(ingredients);
  };

  useEffect(() => {
    getCoctailDetails();
  }, []);

  return (
    <div className="coctailDetails">
      <HeaderNavigation />
      <div className="coctailDetails__container__margin">
        {coctail && (
          <div className="coctailDetails__container">
            <div className="coctailDetails__containe__image">
              <div className="coctailDetails__containe__header">
                <SiEthereum />
              </div>
              <img src={coctailImage} />
            </div>
            <div className="coctailDetails__container__card">
              <h1>{coctailName}</h1>
              <h3>0xbc4c...f13d</h3>
              <div className="coctailDetails__container__card__properties">
                <div className="coctailDetails__container__card__properties__box">
                  <p>Category</p>
                  <p>{coctailCategory}</p>
                </div>
                <div className="coctailDetails__container__card__properties__box">
                  <p>Glass to use</p>
                  <p>{coctailGlass}</p>
                </div>

                <div className="coctailDetails__container__card__properties__box">
                  <p>Type</p>
                  <p>{coctailType}</p>
                </div>
              </div>
              <div className="coctailDetails__container__card__preparation">
                <div className="coctailDetails__container__card__preparation__row">
                  <p className="coctailDetails__container__card__preparation__rowTitle">
                    Składniki:
                  </p>
                  <ul>
                    {coctailIngredients?.map((item, index) => (
                      <li
                        key={index}
                        className="coctailDetails__container__card__preparation__rowText"
                      >
                        <span>
                          {index + 1}. {item.drink}
                        </span>
                        <span>{item.measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="coctailDetails__container__card__preparation__row">
                  <p className="coctailDetails__container__card__preparation__rowTitle">
                    Instrukcja:
                  </p>
                  <p className="coctailDetails__container__card__preparation__rowText">
                    {coctailInstruction}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
