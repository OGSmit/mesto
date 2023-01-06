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
const inputNamePopupAddCard = popupAddCard.querySelector('.popup__inputs_type_name');
const inputHobbyPopupAddCard = popupAddCard.querySelector('.popup__inputs_type_hobby');
const cardContainer = document.querySelector('.profile-content');
const buttonEdit = document.querySelector('.profiles__buttons-edit');
const buttonAdd = document.querySelector('.profiles__buttons-add');
const profileName = document.querySelector('.profiles__name');
const profileSubtitle = document.querySelector('.profiles__subtitle');
const profilesColumn = document.querySelector('.profiles__column');

// отрисовка массива
initialCards.forEach((card) => { 
  cardContainer.prepend(createCard(card.name, card.link)); 
}); 

// Функции:

// f удаление карточки
function removeCard (evt) {
  evt.target.closest('.place-card').remove();
}

// f кнопки лайк
function like(evt) {
  evt.target.classList.toggle('place-card__buttons-like_active');
}

// f создания карточки
function createCard(name, link) {
  const newCard = card.cloneNode('true');
  const newCardImage =  newCard.querySelector('.place-card__image');
  newCardImage.src = link;
  newCard.querySelector('.place-card__subtitle').textContent = name;
  newCardImage.alt = name;
  newCard.querySelector('.place-card__buttons-like').addEventListener('click', like);
  newCard.querySelector('.place-card__buttons-delete').addEventListener('click', removeCard);
  newCardImage.addEventListener('click', openPopupImage);
  return newCard;
}

// f открытия попапов
function openPopup(popup) { 
  popup.classList.add('popup_opened'); 
}

// f закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// f открытие popupEditProfile
function submitPopupEditProfile(evt) {
evt.preventDefault();
profileName.textContent = inputNamePopupEditProfile.value;
profileSubtitle.textContent = inputHobbyPopupEditProfile.value;
closePopup(popupEditProfile);
}

// f открытие popupAddCard
function openPopupAddCard() {
  openPopup(popupAddCard);
}

// f открытие PopupImage
function openPopupImage (evt) {
  openPopup(popupImage);
  cardImage.src = evt.target.src;
  cardImage.alt = evt.target.alt.textContent;
  cardSubtitle.textContent = evt.target.alt;
}

// СЛУШАТЕЛИ:

// на кнопку Редактировать
buttonEdit.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputNamePopupEditProfile.value = profileName.textContent;
  inputHobbyPopupEditProfile.value = profileSubtitle.textContent;
  popupEditProfile.querySelector('.popup__buttons-close').addEventListener('click', () => {
    closePopup(popupEditProfile);
  });
});

// слушатель на кнопку Сохранить popupEditProfile
popupEditProfile.addEventListener('submit', submitPopupEditProfile);

// на кнопку Добавить
buttonAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
  popupAddCard.querySelector('.popup__buttons-close').addEventListener('click', () => {
    closePopup(popupAddCard);
  });
});

// слушатель на кнопку Создать
popupAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  cardContainer.prepend(createCard(inputNamePopupAddCard.value, inputHobbyPopupAddCard.value));
  inputNamePopupAddCard.value ='';
  inputHobbyPopupAddCard.value ='';
  closePopup(popupAddCard);
});

// слушатель кнопки Закрыть PopupImage
buttonClosePopupImage.addEventListener('click', () => {
  closePopup(popupImage);
});