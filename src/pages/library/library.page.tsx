import { FC, useContext, useEffect, useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { useTranslation } from "react-i18next";

import { PhotoGalleryCard } from "../../components/masonry";
import { HeaderNavigation } from "../../components/navigation";
import { MetaMaskContext } from "../../context/metamask.context";
import { LibraryData } from "../../services/library.service";
import { IMetaMaskContext } from "../../types/metamask.types";

import "./library.page.css";

export const Library: FC = () => {
  const { t } = useTranslation();
  const { contract } = useContext(MetaMaskContext) as IMetaMaskContext;

  const [coctails, setCoctails] = useState<any[]>([]);

  const getLibraryData = async () => {
    try {
      const response = await LibraryData.getLibCoctails(contract);
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
      <div className="library__header">
        <h1>{t("common.libraryDescription")}</h1>
        <button
          className="library__margin__container__header__button"
          onClick={getLibraryData}
        >
          <HiOutlineRefresh />
        </button>
      </div>
      <PhotoGalleryCard coctails={coctails} />
    </div>
  );
};
