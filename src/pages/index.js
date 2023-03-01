import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {validationConfig} from '../utils/constants.js';
import { PopupConfirm  } from '../components/PopupConfirm.js';
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
const buttonEditAvatar = document.querySelector('.profiles__buttons-avatar');
const popupEditAvatarClear = document.querySelector('#popup_edit-avatar');
const configForApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '0ea15e75-4859-43c3-ab57-7a6ebeb67038',
    'Content-Type': 'application/json'
  }
}
const likeImage = document.querySelector('.place-card__buttons-like');

// Экземпляры
const popupEditProfileWithValidation = new FormValidator(validationConfig, popupEditProfile);
const popupAddCardWithValidation = new FormValidator(validationConfig, popupAddCard);
const popupEditAvatarWithValidation = new FormValidator(validationConfig, popupEditAvatarClear);
const popupProfile = new PopupWithForm('#popup_edit-profile', handleSubmitProfilePopupForm);
const popupCard = new PopupWithForm('#popup_add-card', handleSubmitAddCardPopupForm);
const popupWithImage = new PopupWithImage('#popup_image');
const section = new Section({
  renderer: (item) => {
    section.addItemAppend(createCard(item));
  }},'.profile-content');
const userInfo = new UserInfo({name: '.profiles__name', about: '.profiles__subtitle'}, '.profiles__avatar');
const popupEditAvatar = new PopupWithForm('#popup_edit-avatar', handleSubmitEditAvatar);
const popupConfirm = new PopupConfirm('#popup_confirm', handlePopupConfirm);
const api = new Api(configForApi);


function createCard(item) {
  const card = new Card(item,
                        '#template',
                        openPopupWithImage,
                        handleCardDelete,
                        like,
                        );
  return card.generateCard();
}

function openPopupWithImage(name, link) {
  popupWithImage.open(name, link);
}


// Коллбеки для попапов
function handlePopupConfirm(card) {
  console.log(card);
  api.removeCard(card.id).then((res) => {
    card.remove();
    popupConfirm.close();
  }).catch(err => console.log(err));
}

const like = (card) => {
 // console.log(card)
  if (card.isLiked) {
    api.removelikeCard(card.id).then((res) => {
     // console.log(res);
      card.querySelector('.place-card__buttons-like').classList.toggle('place-card__buttons-like_active');
      card.querySelector('.place-card__like-counter').textContent = res.likes.length;
      card.isLiked = false;
    }).catch(err => console.log(err));
  } else {
    api.addlikeCard(card.id).then((res) => {
    //  console.log(res);
      card.querySelector('.place-card__buttons-like').classList.toggle('place-card__buttons-like_active');
      card.querySelector('.place-card__like-counter').textContent = res.likes.length;
      card.isLiked = true;
    }).catch(err => console.log(err));
  }
}

function handleSubmitProfilePopupForm(objectFromInputs) {
  popupProfile.loadingState();
  api.editProfile(objectFromInputs).then((res) => {
    //console.log(res);
    userInfo.setUserInfo(objectFromInputs);
    popupProfile.close();
    popupProfile.normalState();
  }).catch(err => console.log(err));
}

function handleSubmitAddCardPopupForm(objectFromInputs) {
  popupCard.loadingState();
  api.addCard(objectFromInputs).then((res) => {
    console.log(res);
    popupCard.close();
    // моя ли карточка
    if (res.owner._id === userInfo.getUserId() ) {
      res.isMine = true;
    } else res.isMine = false;

    document.querySelector('.profile-content').prepend(createCard(res));
    popupCard.normalState();
  }).catch(err => console.log(err))
}

function handleSubmitEditAvatar() {
  popupEditAvatar.loadingState();
  const objectFromInputs = popupEditAvatar.getInputValues();
  api.editAvatar(objectFromInputs).then((res) => {
    console.log(res);
    popupEditAvatar.close();
    popupEditAvatar.normalState();
    userInfo.setUserAvatar(objectFromInputs);
  }).catch((err) => {
    console.log(err);
  });
}

function handleCardDelete(card) {
  popupConfirm.open();
  popupConfirm.setEventListener(card);
}

// // СЛУШАТЕЛИ:

// на кнопку Редактировать
buttonEdit.addEventListener('click', () => {
  popupProfile.open();
  popupEditProfileWithValidation.disabledButton();
  const userObject = userInfo.getUserInfo();
  inputNamePopupEditProfile.value = userObject.name;
  inputHobbyPopupEditProfile.value = userObject.about;
});

// на кнопку Добавить
buttonAdd.addEventListener('click', () => {
  popupCard.open();
  popupAddCardWithValidation.disabledButton();
});

// редактировать аватар
buttonEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
  popupEditAvatarWithValidation.disabledButton();
})

// Работа
popupEditProfileWithValidation.enableValidation();
popupAddCardWithValidation.enableValidation();
popupEditAvatarWithValidation.enableValidation();
popupCard.setEventListeners();
popupProfile.setEventListeners();
popupWithImage.setEventListeners();
popupEditAvatar.setEventListeners();




// получаем данные профиля + рендер
 api.getProfile().then((dataUser) => {
      // отрисовка массива с сервера
    api.getInitialCard().then((data) => {
        data.forEach( (element) => {
         if (element.likes.find(element => element._id === userInfo.getUserId())) {
          element.isLiked = true;
         } else element.isLiked = false;
        });

         data.forEach( (element) => {
           if (element.owner._id === userInfo.getUserId() ) {
            element.isMine = true;
        } else element.isMine = false;
         })
      section.rendererAll(data);
      })
    .catch(err => console.log(err));

    userInfo.setUserInfo(dataUser)
    userInfo.setUserAvatar(dataUser);
  }).catch(err => console.log(err))

