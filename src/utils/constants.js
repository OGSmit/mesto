export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__inputs',
  submitButtonSelector: '.popup__buttons-save',
  inactiveButtonClass: 'popup__buttons-save_invalid',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_visible',
  typeError : 'popup__inputs_type_error',
};


const popupEditProfile = document.querySelector('#popup_edit-profile');
// export const popupAddCard = document.querySelector('#popup_add-card');
export const inputNamePopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_name');
export const inputHobbyPopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_hobby');
export const buttonEdit = document.querySelector('.profiles__buttons-edit');
export const buttonAdd = document.querySelector('.profiles__buttons-add');
export const buttonEditAvatar = document.querySelector('.profiles__buttons-avatar');
// export const popupEditAvatarClear = document.querySelector('#popup_edit-avatar');
export const configForApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '0ea15e75-4859-43c3-ab57-7a6ebeb67038',
    'Content-Type': 'application/json'
  }
}


