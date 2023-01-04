const userTemplate = document.querySelector('#template').content;

const card = userTemplate.querySelector('.place-card');

const popupImage = document.querySelector('.popup-image');
const cardImage = document.querySelector('.popup-image__image');
const cardSubtitle = document.querySelector('.popup-image__subtitle');
const buttonClosePopupImage = popupImage.querySelector('.popup-image__buttons-close');
const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
const buttonSavePopupEditProfile = popupEditProfile.querySelector('.popup__form');
const buttonSavePopupAddCard = popupAddCard.querySelector('.popup__form');
const inputNamePopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_name');
const inputHobbyPopupEditProfile = popupEditProfile.querySelector('.popup__inputs_type_hobby');
const inputNamePopupAddCard= popupAddCard.querySelector('.popup__inputs_type_name');
const inputHobbyPopupAddCard = popupAddCard.querySelector('.popup__inputs_type_hobby');
const cardContainer = document.querySelector('.profile-content');
const buttonEdit = document.querySelector('.profiles__buttons-edit');
const buttonAdd = document.querySelector('.profiles__buttons-add');
const profileName = document.querySelector('.profiles__name');
const profileSubtitle = document.querySelector('.profiles__subtitle');
const profilesColumn = document.querySelector('.profiles__column');


// отрисовка массива
initialCards.forEach((Elem,) => {
  const newCard = card.cloneNode('true');
  createCard(newCard);
  newCard.querySelector('.place-card__image').alt = 'фотография ' + Elem.name;
  newCard.querySelector('.place-card__image').src = Elem.link;
  newCard.querySelector('.place-card__subtitle').textContent = Elem.name;
  return cardContainer.prepend(newCard);
});

// слушатель => отрисовка карточки из popupAddCard
// buttonSavePopupAddCard.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   let card = userTemplate.querySelector('.place-card').cloneNode(true);
//   createCard(card);
//   inputHobbyPopupAddCard.value = '';
//   inputNamePopupAddCard.value = '';
//   closePopup(popupAddCard);
//   return cardContainer.prepend(card);
// });

// f кнопки лайк
function like(evt) {
  evt.target.classList.toggle('place-card__buttons-like_active');
}
// Функционал создания карточки следует вынести в функцию createCard , она должна просто возвращать карточку 
function createCard(card) {
  card.querySelector('.place-card__image').src = inputHobbyPopupAddCard.value;
  card.querySelector('.place-card__subtitle').textContent = inputNamePopupAddCard.value;
  card.querySelector('.place-card__image').alt = inputNamePopupAddCard.value;
  return card;
}
// f открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.classList.add('popup-image_opened');
}

// f открытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.classList.remove('popup-image_opened');
}

// открытие popupEditProfile
// function openPopupEditProfile() {
//   // inputNamePopupEditProfile.value = profileName.textContent;
//   // inputHobbyPopupEditProfile.value = profileSubtitle.textContent;
//   openPopup(popupEditProfile);
// }

// открытие popupEditProfile
function submitPopupEditProfile(evt) {
evt.preventDefault();
profileName.textContent = inputNamePopupEditProfile.value;
profileSubtitle.textContent = inputHobbyPopupEditProfile.value;
closePopup(popupEditProfile);
}

  // открытие popupAddCard
function openPopupAddCard() {
  openPopup(popupAddCard);
}

// открытие PopupImage
function openPopupImage (evt) {
  openPopup(popupImage);
  cardImage.src = evt.target.src;
  cardImage.alt = evt.target.alt.textContent;
  cardSubtitle.textContent = evt.target.alt; // -------
}

// СЛУШАТЕЛИ:

// слушатели profilesСolumn
profilesColumn.addEventListener('click', function(evt) {
  // если клик по кнопке Добавить карточку
  if (evt.target.classList.contains('profiles__buttons-add')) {
    openPopup(popupAddCard);
  }
  // если клик по кнопке Редактировать профиль
  if (evt.target.classList.contains('profiles__buttons-edit')) {
    openPopup(popupEditProfile);
    inputNamePopupEditProfile.value = profileName.textContent;
    inputHobbyPopupEditProfile.value = profileSubtitle.textContent;
  }
});

// f удаление карточки
function removeCard (evt) {
  evt.target.closest('.place-card').remove();
}

// слушатели cardContainer
cardContainer.addEventListener('click', function(evt) {
  // если клик по кнопке лайк
  if (evt.target.classList.contains('place-card__buttons-like')) {
    like(evt);
  };
  // если клик по кнопке удалить
  if (evt.target.classList.contains('place-card__buttons-delete')) {
    console.log('ok');
    removeCard(evt);
  }
  // если клик по картинке -> открыть попап картинки
  if (evt.target.classList.contains('place-card__image')) {
    openPopupImage(evt);
  }
})

// слушатели PopupEditProfile:

popupEditProfile.addEventListener('click', function (evt) {
  // слушатель на кнопку Закрыть попап
  if (evt.target.classList.contains('popup__buttons-close')) {
    closePopup(popupEditProfile);
  }
});
// слушатель на кнопку Сохранить
popupEditProfile.addEventListener('submit', submitPopupEditProfile);

// слушатели PopupAddCard:

popupAddCard.addEventListener('click', function (evt) {
  // слушатель на кнопку Закрыть попап
  if (evt.target.classList.contains('popup__buttons-close')) {
    closePopup(popupAddCard);
  }
});

// слушатель на кнопку Создать
popupAddCard.addEventListener('submit', () => {
  const newCard = card.cloneNode('true');
  createCard(newCard);
  console.log('ok');
  return cardContainer.prepend(newCard);
});

// слушатель кнопки Закрыть PopupImage
buttonClosePopupImage.addEventListener('click', () => {
  closePopup(popupImage);
});