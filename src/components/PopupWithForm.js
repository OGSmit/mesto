import { Popup } from "./Popup";
export class PopupWithForm extends Popup {
  constructor(popupSelectort, callBackSubmit) {
    super(popupSelectort);
    this._callBackSubmit = callBackSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__inputs');
    this._submitBtn = this._form.querySelector('.popup__buttons-save');
  }

  getInputValues() {
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
      this._objectFromInputs = this.getInputValues();
      this._callBackSubmit(this._objectFromInputs);
    });
  }

  setLoadingState() {
    this._submitBtn.textContent = 'Сохранение...';
  }

  setNormalState() {
    this._submitBtn.textContent = 'Сохранить';
  }

  close() {
    super.close();
    this._form.reset();
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }
}