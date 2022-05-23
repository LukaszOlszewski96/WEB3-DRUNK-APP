import { FC, ReactNode } from "react";
import { MdClose } from "react-icons/md";

import "./popup.css";

interface PopupProps {
  close: () => void;
  title?: string;
  children: ReactNode;
}

export const Popup: FC<PopupProps> = (props) => {
  return (
    <div className="popup">
      <div className="popup__background" onClick={props.close}></div>
      <div className="popup__card">
        <button className="popup__card__closeBtn" onClick={props.close}>
          <MdClose />
        </button>
        <p className="popup__card__title">{props.title}</p>
        {props.children}
      </div>
    </div>
  );
};
