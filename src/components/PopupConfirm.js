import { Popup } from "./Popup";
export class PopupConfirm extends Popup {
  constructor(popupSelectort, callBackSubmit) {
    super(popupSelectort);
    this._callBackSubmit = callBackSubmit;
    this._form = this._popupBySelector.querySelector('.popup__form');
    this._inputList = this._popupBySelector.querySelectorAll('.popup__inputs');
  }

  open() {
    super.open();
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBackSubmit(card);
    });
  }

  setCardForDelete(card) {
    this._card = card;
  }
}