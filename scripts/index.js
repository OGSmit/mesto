import {Card} from './Card.js';
import {initialCards} from './massive.js';
import {FormValidator, validationConfig} from './FormValidator.js';

const popupFromImage = document.querySelector('#popup_image');
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
const inputNamePopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_name');
const inputHobbyPopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_hobby');
const inputNamePopupAddCard = popupAddCard.querySelector('.popup__inputs_type_name');
const inputHobbyPopupAddCard = popupAddCard.querySelector('.popup__inputs_type_hobby');
const buttonEdit = document.querySelector('.profiles__buttons-edit');
const buttonAdd = document.querySelector('.profiles__buttons-add');
const profileName = document.querySelector('.profiles__name');
const profileSubtitle = document.querySelector('.profiles__subtitle');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
const buttonCloseList = document.querySelectorAll('.popup__buttons-close');
const cardContainer = document.querySelector('.profile-content');
const buttonCreate = popupAddCard.querySelector('.popup__buttons-save');

initialCards.forEach((item) => {
 cardContainer.prepend(createCard(item));
});

// f открытия попапов
export function openPopup(popup) { 
  popup.classList.add('popup_opened');
  // слушатель закрытия попап по нажатии Esc
  document.addEventListener('keydown', closeByEsc);
}

// f закрытие попап по кнопке Esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}

// f закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
// удаление слушатель закрытия попап по нажатии Esc
  document.removeEventListener('keydown', closeByEsc);
}

// f открытие popupEditProfile
function submitPopupEditProfile(evt) {
evt.preventDefault();
profileName.textContent = inputNamePopupEditProfile.value;
profileSubtitle.textContent = inputHobbyPopupEditProfile.value;
closePopup(popupEditProfile);
}

// f createCard
function createCard(item) {
  const card = new Card(item.name, item.link, '#template', handleCardClick);
  const cardElement = card._generateCard();
  return cardElement
}

// f handleCardClick
function handleCardClick (name, link) {
  popupFromImage.querySelector('.popup__image').src = link;
  popupFromImage.querySelector('.popup__image').alt = name;
  popupFromImage.querySelector('.popup__subtitle').textContent = name;
  openPopup(popupFromImage);
}

// // СЛУШАТЕЛИ:

// на кнопку Редактировать
buttonEdit.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputNamePopupEditProfile.value = profileName.textContent;
  inputHobbyPopupEditProfile.value = profileSubtitle.textContent;
});
// слушатель на кнопку Сохранить popupEditProfile
popupEditProfileForm.addEventListener('submit', submitPopupEditProfile);

// на кнопку Добавить
buttonAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
  buttonCreate.classList.add('popup__buttons-save_invalid');
  buttonCreate.disabled = true;
});

// слушатель на кнопку Создать
popupAddCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const card = new Card(inputNamePopupAddCard.value, inputHobbyPopupAddCard.value, '#template', handleCardClick);
  const cardElement = card._generateCard();
  cardContainer.prepend(cardElement);
  popupAddCardForm.reset();
  closePopup(popupAddCard);
});

// можно лучше
buttonCloseList.forEach(btn => {
  const popup = btn.closest('.popup');
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
}});
  btn.addEventListener('click', () => closePopup(popup)); 
});

const popupEditProfileWithValidation = new FormValidator(validationConfig, popupEditProfile);
const popupAddCardWithValidation = new FormValidator(validationConfig, popupAddCard);

popupEditProfileWithValidation.enableValidation();
popupAddCardWithValidation.enableValidation();
