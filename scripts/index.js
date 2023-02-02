import {Card} from './Card.js';
import {initialCards} from './massive.js';
import {FormValidator, validationConfig} from './FormValidator.js';
import {PopupWithImage, PopupWithForm} from './Popup.js';
// import UserInfo from './UserInfo';
// import Section from './Section.js';

// const popupFromImage = document.querySelector('#popup_image');
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
// const inputNamePopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_name');
// const inputHobbyPopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_hobby');
// const inputNamePopupAddCard = popupAddCard.querySelector('.popup__inputs_type_name');
// const inputHobbyPopupAddCard = popupAddCard.querySelector('.popup__inputs_type_hobby');
const buttonEdit = document.querySelector('.profiles__buttons-edit');
const buttonAdd = document.querySelector('.profiles__buttons-add');
const profileName = document.querySelector('.profiles__name');
const profileSubtitle = document.querySelector('.profiles__subtitle');
const popupEditProfile2 = new PopupWithForm('#popup_edit-profile', callbackSubmit, profileName, profileSubtitle);
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
// const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
const buttonCloseList = document.querySelectorAll('.popup__buttons-close');
const cardContainer = document.querySelector('.profile-content');
// const popupImage = popupFromImage.querySelector('.popup__image');
// const popupSubtitle = popupFromImage.querySelector('.popup__subtitle');
const popupEditProfileWithValidation = new FormValidator(validationConfig, popupEditProfile);
const popupAddCardWithValidation = new FormValidator(validationConfig, popupAddCard);

popupEditProfileWithValidation.enableValidation();
popupAddCardWithValidation.enableValidation();

initialCards.forEach((item) => {
 cardContainer.prepend(createCard(item));
});

// f открытия PopupWithImage
export function openPopupWithImage(name, link) {
  const popupWithImage = new PopupWithImage('#popup_image', name, link)
  popupWithImage.open();
}
// f открытия попапов
// export function openPopup(popup) { 
//   popup.classList.add('popup_opened');
//   // слушатель закрытия попап по нажатии Esc
//   document.addEventListener('keydown', closeByEsc);
// }

// f закрытие попап по кнопке Esc
// function closeByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup); 
//   }
// }

// f закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// f открытие popupEditProfile
// function submitPopupEditProfile(evt) {
// evt.preventDefault();
// profileName.textContent = inputNamePopupEditProfile.value;
// profileSubtitle.textContent = inputHobbyPopupEditProfile.value;
// closePopup(popupEditProfile);
// }

// f createCard
function createCard(item) {
  const card = new Card(item.name, item.link, '#template', openPopupWithImage);
  return card.cardElement
}

// f handleCardClick
// function handleCardClick (name, link) {
//   popupImage.src = link;
//   popupImage.alt = name;
//   popupSubtitle.textContent = name;
//   openPopup(popupFromImage);
// }

// f Inputs to Object ))
function inputsToObject ( name, link) {
  const object = new Object();
  object.name = name;
  object.link = link;
  return object;
}
// // СЛУШАТЕЛИ:

// слушатель на кнопку Создать
popupAddCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const obj = inputsToObject(inputNamePopupAddCard.value, inputHobbyPopupAddCard.value);
  cardContainer.prepend(createCard(obj));
  popupAddCardForm.reset();
  closePopup(popupAddCard);
});

function callbackSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputNamePopupEditProfile.value;
  profileSubtitle.textContent = inputHobbyPopupEditProfile.value;
}

// на кнопку Редактировать
buttonEdit.addEventListener('click', () => {
  popupEditProfile2.open();

  popupEditProfileWithValidation.disabledButton();
});
// слушатель на кнопку Сохранить popupEditProfile
// popupEditProfileForm.addEventListener('submit', submitPopupEditProfile);

// на кнопку Добавить
buttonAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
  popupAddCardWithValidation.disabledButton();
});


// можно лучше
buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup)); 
});

