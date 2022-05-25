import { FC, useEffect, useState } from "react";
import { PhotoGalleryCard } from "../../components/masonry";
// import { useTranslation } from "react-i18next";

import { HeaderNavigation } from "../../components/navigation";
import { LibraryData } from "../../services/library.service";

import "./library.page.css";

export const Library: FC = () => {
  //   const { t } = useTranslation();

  const [coctails, setCoctails] = useState<any[]>([]);

  const getLibraryData = async () => {
    try {
      const response = await LibraryData.getLibCoctails();
      if (response) {
        setCoctails(
          response.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLibraryData();
  }, []);

  console.log(coctails);

  return (
    <div className="library">
      <HeaderNavigation />
      <div className="library__margin">
        <div className="library__margin__container">
          <button onClick={getLibraryData}>Get Data</button>
          <PhotoGalleryCard coctails={coctails} />
        </div>
      </div>
    </div>
  );
};
