import { Popup } from "./Popup";
export class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__inputs');
    this._buttonSave = this._form.querySelector('.popup__buttons-save');
  }

  handleFormSubmit(callback) {
    this._callBack = callback;
  }

  setEventListeners() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBack();
    });
  }

  setLoadingState() {
    this._buttonSave.textContent = 'Удаление...';
  }

  setNormalState() {
    this._buttonSave.textContent = 'Да';
  }
}