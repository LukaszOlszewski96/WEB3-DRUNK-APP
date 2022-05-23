import { FC } from "react";
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
            <div key={index} className="photoGalleryCard__box__card">
              <img src={item.strDrinkThumb} alt={item.strDrink} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
