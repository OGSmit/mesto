export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__inputs',
  submitButtonSelector: '.popup__buttons-save',
  inactiveButtonClass: 'popup__buttons-save_invalid',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_visible',
  typeError : 'popup__inputs_type_error',
};

export class FormValidator {
  constructor (config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = formElement.querySelector(this._config.submitButtonSelector);
  }
  
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.typeError);
  };
  
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.typeError);
  };
  
  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    };
  };
  
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  };
  
  _toggleButtonState(buttonElement) {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.disabled = true;
  } else {
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }
};

enableValidation() {
  this._toggleButtonState(this._buttonElement);
  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState(this._buttonElement);
    });
  });
 };
}