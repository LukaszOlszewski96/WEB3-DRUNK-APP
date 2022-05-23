import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";

import { LoadingDataSpinner } from "../spinner";

import "./photo-gallery.component.css";

interface PhotoMasonryProps {
  coctails: any[];
}

export const PhotoGalleryCard: FC<PhotoMasonryProps> = (props) => {
  const [scrollButton, setScrollButton] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setScrollButton(true);
      } else {
        setScrollButton(false);
      }
    });
  }, []);

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
      {scrollButton && (
        <button className="photoGalleryCard__scrollToTop" onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </button>
      )}
    </div>
  );
};
