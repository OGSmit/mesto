import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {validationConfig, initialCards} from '../utils/constants.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Api} from '../components/Api.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

// Константы
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
const inputNamePopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_name');
const inputHobbyPopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_hobby');
const buttonEdit = document.querySelector('.profiles__buttons-edit');
const buttonAdd = document.querySelector('.profiles__buttons-add');
const buttonEditAvatar = document.querySelector('.profiles__avatar_hover');
const avatarImage = document.querySelector('.profiles__avatar');
const popupEditAvatarClear = document.querySelector('#popup_edit-avatar');
const configForApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-60/cards',
  headers: {
    authorization: '0ea15e75-4859-43c3-ab57-7a6ebeb67038',
    'Content-Type': 'application/json'
  }
}

// Экземпляры
const popupEditProfileWithValidation = new FormValidator(validationConfig, popupEditProfile);
const popupAddCardWithValidation = new FormValidator(validationConfig, popupAddCard);
const popupEditAvatarWithValidation = new FormValidator(validationConfig, popupEditAvatarClear);
const popupProfile = new PopupWithForm('#popup_edit-profile', handleSubmitProfilePopupForm);
const popupCard = new PopupWithForm('#popup_add-card', handleSubmitAddCardPopupForm);
const popupWithImage = new PopupWithImage('#popup_image');
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    section.addItem(createCard(item));
  }},'.profile-content');
const userInfo = new UserInfo({name: '.profiles__name', hobby: '.profiles__subtitle'});
const popupEditAvatar = new PopupWithForm('#popup_edit-avatar', handleSubmitEditAvatar);
const popupConfirm = new PopupWithForm('#popup_confirm', handleSubmitpopupConfirm) /// попап с подтверждением
const api = new Api(configForApi);

function openPopupWithImage(name, link) {
  popupWithImage.open(name, link);
}

function createCard(item) {
  const card = new Card(item.name, item.link, '#template', openPopupWithImage);
  return card._generateCard();
}

function handleSubmitProfilePopupForm(objectFromInputs) {
  userInfo.setUserInfo(objectFromInputs);
}

function handleSubmitAddCardPopupForm(objectFromInputs) {
  section.addItem(createCard(objectFromInputs));
}

function handleSubmitEditAvatar(objectFromInputs) {
  avatarImage.src = objectFromInputs.link
}

function handleSubmitpopupConfirm() {

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

// редактировать аватар
buttonEditAvatar.addEventListener('click', (evt) => {
  popupEditAvatar.open();
})

// Работа
popupEditProfileWithValidation.enableValidation();
popupAddCardWithValidation.enableValidation();
popupEditAvatarWithValidation.enableValidation();
section.rendererAll();
popupCard.setEventListeners();
popupProfile.setEventListeners();
popupWithImage.setEventListeners();
popupEditAvatar.setEventListeners();


api.getInitialCard().then((res) => {
  if(res.ok) {
    return res.json();
  } else {
    return console.log('Catch some Error')
  }
}).then((data) => {
  data.forEach((element) => {
    section.addItem(createCard(element))
  } )
}).catch(err => console.log(err));