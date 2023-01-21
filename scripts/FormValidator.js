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
  }
  
  _showInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.typeError);
  };
  
  _hideInputError(formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(config.typeError);
 };

 _checkInputValidity(formElement, inputElement, config) {
    if (inputElement.validity.valid) {
      this._hideInputError(formElement, inputElement, config);
    } else {
      this._showInputError(formElement, inputElement, config);
    };
 };

  _hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
 };

  _toggleButtonState(inputList, buttonElement, config) {
  if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
 };

  setEventListener(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  this._toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(formElement, inputElement, config);
      this._toggleButtonState(inputList, buttonElement, config);
    });
  });
 };
}


// // логика взята с вебинара
// function showInputError(formElement, inputElement, config) {
  //   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  //   errorElement.classList.add(config.errorClass);
  //   errorElement.textContent = inputElement.validationMessage;
  //   inputElement.classList.add(config.typeError);
  // };
  
  // function hideInputError(formElement, inputElement, config) {
    //   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    //   errorElement.classList.remove(config.errorClass);
//   errorElement.textContent = '';
//   inputElement.classList.remove(config.typeError);
// };

// function checkInputValidity(formElement, inputElement, config) {
//   if (inputElement.validity.valid) {
//     hideInputError(formElement, inputElement, config);
//   } else {
//     showInputError(formElement, inputElement, config);
//   };
// };

// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => !inputElement.validity.valid);
// };

// function toggleButtonState(inputList, buttonElement, config) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(config.inactiveButtonClass);
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.classList.remove(config.inactiveButtonClass);
//     buttonElement.disabled = false;
//   }
// };

// function setEventListener(formElement, config) {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const buttonElement = formElement.querySelector(config.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, config);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement, config);
//       toggleButtonState(inputList, buttonElement, config);
//     });
//   });
// };

// function enableValidation(config) {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     setEventListener(formElement, config);
//   });
// };
