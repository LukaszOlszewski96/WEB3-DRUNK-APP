import { FC, ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SiEthereum } from "react-icons/si";
import { useSearchParams } from "react-router-dom";
import { Popup } from "../../components/common/popups";

import { HeaderNavigation } from "../../components/navigation";
import { CoctaiData, Coctail } from "../../services/coctail.service";
import {
  Ingredient,
  IngredientsData,
} from "../../services/ingredients.service";

import "./coctail-details.page.css";

export const CoctailDetails: FC = () => {
  const { t } = useTranslation();

  const [coctail, setCoctail] = useState<Coctail | undefined>();
  const [coctailIngredients, setCoctailIngredients] = useState<any[]>();
  const [popup, setPopup] = useState<ReactElement | null>(null);
  const [ingredientsDetails, setIngredientsDetails] = useState<
    Ingredient | undefined
  >();

  const [searchParams] = useSearchParams();
  const coctailID = searchParams.get("id");

  console.log(ingredientsDetails);

  const closePopup = () => {
    setPopup(null);
    setIngredientsDetails(undefined);
  };

  const getIngredientsDetail = async (name: string) => {
    try {
      const response = await IngredientsData.getIngredientsDetails(name);
      setIngredientsDetails({
        ingredients: [
          {
            strIngredient: response.data.ingredients[0].strIngredient,
            strDescription: response.data.ingredients[0].strDescription,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const showProductPopup = (title: string) => {
    getIngredientsDetail(title);
  };

  useEffect(() => {
    if (ingredientsDetails === undefined) return;
    if (ingredientsDetails !== undefined) {
      setPopup(
        <Popup
          close={closePopup}
          title={ingredientsDetails?.ingredients[0].strIngredient}
        >
          <div className="ingredientsDetails">
            <p className="ingredientsDetails__description">
              {!ingredientsDetails?.ingredients[0].strDescription
                ? t("common.popupInfo")
                : ingredientsDetails?.ingredients[0].strDescription}
            </p>
          </div>
        </Popup>
      );
    }
  }, [ingredientsDetails]);

  const getCoctailDetails = async () => {
    const response = await CoctaiData.getCoctailDetails(coctailID);
    setCoctail({
      drinks: [
        {
          strDrink: response.data.drinks[0].strDrink,
          strCategory: response.data.drinks[0].strCategory,
          strGlass: response.data.drinks[0].strGlass,
          strAlcoholic: response.data.drinks[0].strAlcoholic,
          strInstructions: response.data.drinks[0].strInstructions,
          strDrinkThumb: response.data.drinks[0].strDrinkThumb,
        },
      ],
    });

    const drinks = Object.entries(response.data.drinks[0]).filter(
      ([key, value]) => key.startsWith("strIngredient") && value && value.trim()
    );
    const measures = Object.entries(response.data.drinks[0]).filter(
      ([key, value]) => key.startsWith("strMeasure") && value && value.trim()
    );

    console.log(drinks[0][1]);

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
        {coctail !== undefined && (
          <div className="coctailDetails__container">
            <div className="coctailDetails__containe__image">
              <div className="coctailDetails__containe__header">
                <SiEthereum />
              </div>
              <img src={coctail.drinks[0].strDrinkThumb} alt="coctail" />
            </div>
            <div className="coctailDetails__container__card">
              <h1>{coctail.drinks[0].strDrink}</h1>
              <h3>0xbc4c...f13d</h3>
              <div className="coctailDetails__container__card__properties">
                <div className="coctailDetails__container__card__properties__box">
                  <p>{t("common.category")}</p>
                  <p>{coctail.drinks[0].strCategory}</p>
                </div>
                <div className="coctailDetails__container__card__properties__box">
                  <p>{t("common.glassToUse")}</p>
                  <p>{coctail.drinks[0].strGlass}</p>
                </div>

                <div className="coctailDetails__container__card__properties__box">
                  <p>{t("common.type")}</p>
                  <p>{coctail.drinks[0].strAlcoholic}</p>
                </div>
              </div>
              <div className="coctailDetails__container__card__preparation">
                <div className="coctailDetails__container__card__preparation__row">
                  <p className="coctailDetails__container__card__preparation__rowTitle">
                    {t("common.ingredients")}
                  </p>
                  <ul>
                    {coctailIngredients?.map((item, index) => (
                      <li
                        key={index}
                        className="coctailDetails__container__card__preparation__rowText"
                      >
                        <span onClick={() => showProductPopup(item.drink[1])}>
                          {index + 1}. {item.drink[1]}
                        </span>
                        <span>{item.measure[1]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="coctailDetails__container__card__preparation__row">
                  <p className="coctailDetails__container__card__preparation__rowTitle">
                    {t("common.instruction")}
                  </p>
                  <p className="coctailDetails__container__card__preparation__rowText">
                    {coctail.drinks[0].strInstructions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {popup ? popup : null}
    </div>
  );
};
