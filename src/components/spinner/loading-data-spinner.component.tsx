import { FC } from "react";
import { BiDrink } from "react-icons/bi";

import "./loading-data-spinner.component.css";

export const LoadingDataSpinner: FC = () => {
  return (
    <div className="loadingDataSpinner">
      <BiDrink className="loadingDataSpinner__icon" />
    </div>
  );
};
