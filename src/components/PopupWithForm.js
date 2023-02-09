import { Popup } from "./Popup";
export class PopupWithForm extends Popup {
  constructor(popupSelectort, callBackSubmit) {
    super(popupSelectort);
    this._callBackSubmit = callBackSubmit;
    this._form = this._popupBySelector.querySelector('.popup__form');
  }

  _getInputValues() {
    this._obj = {};
    this._inputList = this._popupBySelector.querySelectorAll('popup__inputs');
    this._inputList.forEach(element => {
    this._obj[element.value] = element.value;
    });
    return this._obj;
  };

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBackSubmit(this._getInputValues());
      this.close();
    });
  }

  open() {
    super.open()
  }

  close() {
    super.close();
    this._form.reset();
  }
}