import { FC } from "react";
import { Link } from "react-router-dom";
import { LoadingDataSpinner } from "../spinner";

import "./photo-gallery.component.css";

interface PhotoMasonryProps {
  coctails: any[];
}

export const PhotoGalleryCard: FC<PhotoMasonryProps> = ({ ...props }) => {
  return (
    <div className="photoGalleryCard">
      {props.coctails === null ? (
        <LoadingDataSpinner />
      ) : (
        <div {...props} className="photoGalleryCard__box">
          {props.coctails.map((item, index) => (
            <Link to={`/coctail/details?id=${item.idDrink}`}>
              <div key={index} className="photoGalleryCard__box__card">
                <img src={item.strDrinkThumb} alt={item.strDrink} />
                <span>{item.strDrink}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
