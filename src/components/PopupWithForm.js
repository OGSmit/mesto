import { Popup } from "./Popup";
export class PopupWithForm extends Popup {
  constructor(popupSelectort, callBackSubmit) {
    super(popupSelectort);
    this._callBackSubmit = callBackSubmit;
    this._form = this._popupBySelector.querySelector('.popup__form');
    this._inputList = this._popupBySelector.querySelectorAll('.popup__inputs');
  }

  _getInputValues() {
    this._obj = {};
    this._inputList.forEach(element => {
      this._obj[element.name] = element.value;
    })
    return this._obj;
  };

  setEventListeners() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._objectFromInputs = this._getInputValues();
      this._callBackSubmit(this._objectFromInputs);
    });
  }

  _loadingState() {
    this._form.querySelector('.popup__buttons-save').textContent = 'Сохранение...';
  }

  _normalState() {
    this._form.querySelector('.popup__buttons-save').textContent = 'Сохранить';
  }

  open() {
    super.open()
  }

  close() {
    super.close();
    this._form.reset();
  }
}