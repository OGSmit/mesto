import { Popup } from "./Popup";
export class PopupConfirm extends Popup {
  constructor(popupSelectort) {
    super(popupSelectort);
    this._form = this._popupBySelector.querySelector('.popup__form');
    this._inputList = this._popupBySelector.querySelectorAll('.popup__inputs');
  }

  open() {
    super.open();
  }

  close() {
    super.close();
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

  loadingState() {
    this._form.querySelector('.popup__buttons-save').textContent = 'Удаление...';
  }

  normalState() {
    this._form.querySelector('.popup__buttons-save').textContent = 'Да';
  }
}