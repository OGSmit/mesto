import {Card} from './Card.js';
import {initialCards} from './massive.js';
import {FormValidator, validationConfig} from './FormValidator.js';
import {PopupWithImage, PopupWithForm} from './Popup.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';

// Константы
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
const inputNamePopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_name');
const inputHobbyPopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_hobby');
const buttonEdit = document.querySelector('.profiles__buttons-edit');
const buttonAdd = document.querySelector('.profiles__buttons-add');

// Экземпляры
const popupEditProfileWithValidation = new FormValidator(validationConfig, popupEditProfile);
const popupAddCardWithValidation = new FormValidator(validationConfig, popupAddCard);
const popupProfile = new PopupWithForm('#popup_edit-profile', callbackForPopupProfile);
const popupCard = new PopupWithForm('#popup_add-card', callbackForPopupAddCard);
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    section.addItem(createCard(item));
  }},'.profile-content');
const userInfo = new UserInfo({name: '.profiles__name', hobby: '.profiles__subtitle'});

function openPopupWithImage(name, link) {
  const popupWithImage = new PopupWithImage('#popup_image', name, link)
  popupWithImage.open();
}

function createCard(item) {
  const card = new Card(item.name, item.link, '#template', openPopupWithImage);
  return card.cardElement
}

function callbackForPopupProfile(objectFromInputs) {
  console.log(objectFromInputs);
  userInfo.setUserInfo(objectFromInputs);
}

function callbackForPopupAddCard(objectFromInputs) {
  section.addItem(createCard(objectFromInputs));
}

// // СЛУШАТЕЛИ:

// на кнопку Редактировать
buttonEdit.addEventListener('click', () => {
  popupProfile.open();
  popupEditProfileWithValidation.disabledButton();
  const userObject = userInfo.getUserInfo();
  inputNamePopupEditProfile.value = userObject.name;
  inputHobbyPopupEditProfile.value = userObject.hobby;
});

// на кнопку Добавить
buttonAdd.addEventListener('click', () => {
  popupCard.open();
  popupAddCardWithValidation.disabledButton();
});

// Работа
popupEditProfileWithValidation.enableValidation();
popupAddCardWithValidation.enableValidation();
section.rendererAll();
popupCard.setEventListeners();
popupProfile.setEventListeners();