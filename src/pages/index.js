import '../pages/index.css';
import {Card} from '../components/Card.js';
import {initialCards} from '../utils/massive.js';
import {FormValidator} from '../components/FormValidator.js';
import {validationConfig} from '../utils/constants.js'
import { PopupWithForm } from '../components/PopupWithForm';
import { PopupWithImage } from '../components/PopupWithImage';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

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
const popupProfile = new PopupWithForm('#popup_edit-profile', handleSubmitProfilePopupForm);
const popupCard = new PopupWithForm('#popup_add-card', handleSubmitAddCardPopupForm);
const popupWithImage = new PopupWithImage('#popup_image');
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    section.addItem(createCard(item));
  }},'.profile-content');
const userInfo = new UserInfo({name: '.profiles__name', hobby: '.profiles__subtitle'});

function openPopupWithImage(name, link) {
  popupWithImage.open(name, link);
}

function createCard(item) {
  const card = new Card(item.name, item.link, '#template', openPopupWithImage);
  return card.cardElement
}

function handleSubmitProfilePopupForm(objectFromInputs) {
  // Не нашел способа передать данные инпутов по другому
  userInfo.setUserInfo(objectFromInputs);
}

function handleSubmitAddCardPopupForm(objectFromInputs) {
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