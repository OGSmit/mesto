import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {validationConfig} from '../utils/constants.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Api} from '../components/Api.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

// Константы
const popupConfirmation = document.querySelector('#popup_confirm')
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
const inputNamePopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_name');
const inputHobbyPopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_hobby');
const buttonEdit = document.querySelector('.profiles__buttons-edit');
const buttonAdd = document.querySelector('.profiles__buttons-add');
const buttonEditAvatar = document.querySelector('.profiles__avatar_hover');
const popupEditAvatarClear = document.querySelector('#popup_edit-avatar');
const configForApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
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
  renderer: (item) => {
    section.addItem(createCard(item));
  }},'.profile-content');
const userInfo = new UserInfo({name: '.profiles__name', about: '.profiles__subtitle'}, '.profiles__avatar');
const popupEditAvatar = new PopupWithForm('#popup_edit-avatar', handleSubmitEditAvatar);
const popupConfirm = new PopupWithForm('#popup_confirm');
const api = new Api(configForApi);

const like = (cardId, isLiked) => {
  if (isLiked) {
    api._removelikeCard(cardId).then(() => {
      location.reload();
    }).catch(err => console.log(err));
  } else api._addlikeCard(cardId).then(() => {
    location.reload();
  }).catch(err => console.log(err));
}


function createCard(item) {
  const card = new Card(item,
                        '#template',
                        openPopupWithImage,
                        handleCardDelete,
                        like,
                        );
  return card._generateCard();
}

function openPopupWithImage(name, link) {
  popupWithImage.open(name, link);
}

// Коллбеки для попапов
function handleSubmitProfilePopupForm(objectFromInputs) {
  popupProfile._loadingState();
  api._editProfile(objectFromInputs).then((res) => {
    console.log(res);
    popupProfile.close();
    popupProfile._normalState();
    location.reload()
  }).catch(err => console.log(err));
}

function handleSubmitAddCardPopupForm(objectFromInputs) {
  popupCard._loadingState();
  api._addCard(objectFromInputs).then((res) => {
    console.log(res);
    popupCard.close();
    popupCard._normalState();
    location.reload()
  }).catch(err => console.log(err))
}

function handleSubmitEditAvatar() {
  popupEditAvatar._loadingState();
  const objectFromInputs = popupEditAvatar._getInputValues();
  api._editAvatar(objectFromInputs).then((res) => {
    console.log(res);
    popupEditAvatar.close();
    popupEditAvatar._normalState();
    location.reload()
  }).catch((err) => {
    console.log(err);
  });
}

function handleCardDelete(evt) {
  popupConfirm.open();
  const cardId = evt.target.closest('.place-card');
  popupConfirmation.querySelector('.popup__buttons-save').addEventListener('click', (evt) => {
    evt.preventDefault();
    api._removeCard(cardId.id).then((res) => {
      console.log(res);
      location.reload();
      popupConfirm.close();
    }).catch(err => console.log(err));
  })
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

})

// Работа
popupEditProfileWithValidation.enableValidation();
popupAddCardWithValidation.enableValidation();
popupEditAvatarWithValidation.enableValidation();
popupCard.setEventListeners();
popupProfile.setEventListeners();
popupWithImage.setEventListeners();
popupEditAvatar.setEventListeners();
popupConfirm.setEventListeners();



// получаем данные профиля + рендер
 api.getProfile().then((res) => {
    if(res.ok) {
      return res.json()
    } else {
      return console.log('api.getProfile catch some Error')
    }
  }).then((dataUser) => {

      // отрисовка массива с сервера
    api.getInitialCard().then((res) => {
      if(res.ok) {
        return res.json();
      } else {
        return console.log('api.getInitialCard catch some Error')
      }
      }).then((data) => {
        data.forEach( (element) => {
         if (element.likes.find(element => element._id === userInfo._getUserId())) {
          element.isLiked = true;
         } else element.isLiked = false;
        });

         data.forEach( (element) => {
           if (element.owner._id === userInfo._getUserId() ) {
            element.isMine = true;
        } else element.isMine = false;
         })
      section.rendererAll(data);
      })
    .catch(err => console.log(err));

    userInfo.setUserInfo(dataUser)
    userInfo.setUserAvatar(dataUser);
  }).catch(err => console.log(err))

