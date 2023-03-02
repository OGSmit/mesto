import { Popup } from "./Popup";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageFromPopup = this._popup.querySelector('.popup__image');
    this._popupSubtitle = this._popup.querySelector('.popup__subtitle');
  }

  open(name, link) {
    super.open();
    this._imageFromPopup.src = link;
    this._imageFromPopup.alt = name;
    this._popupSubtitle.textContent = name;
  }
}