import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {
  validationConfig,
  inputNamePopupEditProfile,
  inputHobbyPopupEditProfile,
  buttonEdit,
  buttonAdd,
  buttonEditAvatar,
  configForApi,
} from '../utils/constants.js';
import { PopupConfirm  } from '../components/PopupConfirm.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Api} from '../components/Api.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

// Экземпляры
// const popupEditProfileWithValidation = new FormValidator(validationConfig, popupEditProfile);
// const popupAddCardWithValidation = new FormValidator(validationConfig, popupAddCard);
// const popupEditAvatarWithValidation = new FormValidator(validationConfig, popupEditAvatarClear);
const popupProfile = new PopupWithForm('#popup_edit-profile', handleSubmitProfilePopupForm);
const popupCard = new PopupWithForm('#popup_add-card', handleSubmitAddCardPopupForm);
const popupWithImage = new PopupWithImage('#popup_image');
const section = new Section({
  renderer: (item) => {
    section.addItemAppend(createCard(item));
  }},'.profile-content');
const userInfo = new UserInfo({name: '.profiles__name', about: '.profiles__subtitle'}, '.profiles__avatar');
const popupEditAvatar = new PopupWithForm('#popup_edit-avatar', handleSubmitEditAvatar);
const popupConfirm = new PopupConfirm('#popup_confirm');
const api = new Api(configForApi);

const formValidators = {}
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

Promise.all([api.getProfile(), api.getInitialCard()])
.then(([userData, cards]) => {
 userInfo.setUserInfo(userData);
 userInfo.setUserAvatar(userData);
 section.rendererAll(cards);
})
.catch(err => {
  console.log(err);
});

// Колбэки 
function createCard(item) {
  item.userId = userInfo.getUserId();
  const card = new Card(item,
                        '#template',
                        openPopupWithImage,
                        handleCardDelete,
                        like,
                        dislike,
                        );
  return card.generateCard();
}

function openPopupWithImage(name, link) {
  popupWithImage.open(name, link);
}

const like = (card) => {
  api
  .addlikeCard(card.cardId)
  .then((res) => {
    card.putLikes(res)
  })
  .catch(err => console.log(err));
}

const dislike = (card) => {
  api
  .removelikeCard(card.cardId)
  .then((res) => {
    card.putLikes(res)
  })
  .catch(err => console.log(err));
}

function handleSubmitProfilePopupForm(objectFromInputs) {
  popupProfile.setLoadingState();
  api
  .editProfile(objectFromInputs).then((res) => {
    userInfo.setUserInfo(res);
    popupProfile.close();
  })
  .catch(err => console.log(err))
  .finally(() => popupProfile.setNormalState());
}

function handleSubmitAddCardPopupForm(objectFromInputs) {
  popupCard.setLoadingState();
  api
  .addCard(objectFromInputs)
  .then((res) => {
    popupCard.close();
    section.addItemPrepend(createCard(res));
  })
  .catch(err => console.log(err))
  .finally( () => popupCard.setNormalState())
}

function handleSubmitEditAvatar(objectFromInputs) {
  popupEditAvatar.setLoadingState();
  api
  .editAvatar(objectFromInputs)
  .then((res) => {
    popupEditAvatar.close();;
    userInfo.setUserAvatar(res);
  }).catch((err) => {
    console.log(err);
  }).finally(() => popupEditAvatar.setNormalState());
}

function handleCardDelete(card) {
  popupConfirm.open();
  popupConfirm.handleFormSubmit( function() {
    popupConfirm.setLoadingState();
    api
    .removeCard(card.cardId)
    .then(() => {
      card.removeCard();
    })
    .then(() => popupConfirm.close())
    .catch(err => console.log(err))
    .finally(() => popupConfirm.setNormalState());
  })
}

// // СЛУШАТЕЛИ:

// на кнопку Редактировать
buttonEdit.addEventListener('click', () => {
  popupProfile.open();
  popupProfile.setInputValues(userInfo.getUserInfo())
  formValidators['profile-form'].disabledButton();
  formValidators['profile-form'].resetValidation();
});

// на кнопку Добавить
buttonAdd.addEventListener('click', () => {
  popupCard.open();
  formValidators['addcard-form'].resetValidation();
});

// редактировать аватар
buttonEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
  formValidators['avatar-form'].resetValidation();
})

// Работа
popupCard.setEventListeners();
popupProfile.setEventListeners();
popupWithImage.setEventListener();
popupEditAvatar.setEventListeners();
popupConfirm.setEventListeners();
enableValidation(validationConfig)