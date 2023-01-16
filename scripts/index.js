import {Card} from './Card.js';

Card.renderCard();


// const userTemplate = document.querySelector('#template').content;
// const card = userTemplate.querySelector('.place-card');
// const popupImage = document.querySelector('#popup_image');
// const cardImage = document.querySelector('.popup__image');
// const cardSubtitle = document.querySelector('.popup__subtitle');
// const popupEditProfile = document.querySelector('#popup_edit-profile');
// const popupAddCard = document.querySelector('#popup_add-card');
// const buttonSavePopupEditProfile = popupEditProfile.querySelector('.popup__form');
// const buttonSavePopupAddCard = popupAddCard.querySelector('.popup__form');
// const inputNamePopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_name');
// const inputHobbyPopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_hobby');
// const inputNamePopupAddCard = popupAddCard.querySelector('.popup__inputs_type_name');
// const inputHobbyPopupAddCard = popupAddCard.querySelector('.popup__inputs_type_hobby');
// const cardContainer = document.querySelector('.profile-content');
// const buttonEdit = document.querySelector('.profiles__buttons-edit');
// const buttonAdd = document.querySelector('.profiles__buttons-add');
// const profileName = document.querySelector('.profiles__name');
// const profileSubtitle = document.querySelector('.profiles__subtitle');
// const profilesColumn = document.querySelector('.profiles__column');
// const popupAddCardForm = popupAddCard.querySelector('.popup__form');
// const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
// const buttonCloseList = document.querySelectorAll('.popup__buttons-close');


// const validationConfig = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__inputs',
//   submitButtonSelector: '.popup__buttons-save',
//   inactiveButtonClass: 'popup__buttons-save_invalid',
//   inputErrorClass: 'popup__input-error',
//   errorClass: 'popup__input-error_visible',
//   typeError : 'popup__inputs_type_error',
// };

// // отрисовка массива
// initialCards.forEach((card) => { 
//   cardContainer.prepend(createCard(card.name, card.link));
// }); 

// // Функции:

// // f удаление карточки
// function removeCard (evt) {
//   evt.target.closest('.place-card').remove();
// }

// // f кнопки лайк
// function like(evt) {
//   evt.target.classList.toggle('place-card__buttons-like_active');
// }

// // f создания карточки
// function createCard(name, link) {
//   const newCard = card.cloneNode('true');
//   const newCardImage =  newCard.querySelector('.place-card__image');
//   newCardImage.src = link;
//   newCard.querySelector('.place-card__subtitle').textContent = name;
//   newCardImage.alt = name;
//   newCard.querySelector('.place-card__buttons-like').addEventListener('click', like);
//   newCard.querySelector('.place-card__buttons-delete').addEventListener('click', removeCard);
//   newCardImage.addEventListener('click', () => openPopupImage(name, link));
//   return newCard;
// }

// // f открытия попапов
// function openPopup(popup) { 
//   popup.classList.add('popup_opened');
//   // слушатель закрытия попап по нажатии Esc
//   document.addEventListener('keydown', closeByEsc);
// }

// // f закрытие попап по кнопке Esc
// function closeByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup); 
//   }
// }

// // f закрытия попапов
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
// // удаление слушатель закрытия попап по нажатии Esc
//   document.removeEventListener('keydown', closeByEsc);
// }

// // f открытие popupEditProfile
// function submitPopupEditProfile(evt) {
// evt.preventDefault();
// profileName.textContent = inputNamePopupEditProfile.value;
// profileSubtitle.textContent = inputHobbyPopupEditProfile.value;
// closePopup(popupEditProfile);
// }

// // f открытие PopupImage
// function openPopupImage (name, link) {
//   openPopup(popupImage);
//   cardImage.src = link;
//   cardImage.alt = name;
//   cardSubtitle.textContent = name;
// }

// // СЛУШАТЕЛИ:

// // на кнопку Редактировать
// buttonEdit.addEventListener('click', () => {
//   openPopup(popupEditProfile);
//   inputNamePopupEditProfile.value = profileName.textContent;
//   inputHobbyPopupEditProfile.value = profileSubtitle.textContent;
// });
// // слушатель на кнопку Сохранить popupEditProfile
// popupEditProfileForm.addEventListener('submit', submitPopupEditProfile);

// // на кнопку Добавить
// buttonAdd.addEventListener('click', () => {
//   openPopup(popupAddCard);
// });

// // слушатель на кнопку Создать
// popupAddCardForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   cardContainer.prepend(createCard(inputNamePopupAddCard.value, inputHobbyPopupAddCard.value));
//   popupAddCardForm.reset();
//   const button = evt.submitter;
//   button.disabled = true;
//   button.classList.add('popup__buttons-save_invalid');
//   closePopup(popupAddCard);
// });

// // подключаем валидацию
// enableValidation(validationConfig);

// // можно лучше
// buttonCloseList.forEach(btn => {
//   const popup = btn.closest('.popup');
//   popup.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup')) {
//       closePopup(popup);
// }});
//   btn.addEventListener('click', () => closePopup(popup)); 
// });