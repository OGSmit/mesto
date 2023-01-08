const userTemplate = document.querySelector('#template').content;
const card = userTemplate.querySelector('.place-card');
const popupImage = document.querySelector('#popup_image');
const cardImage = document.querySelector('.popup__image');
const cardSubtitle = document.querySelector('.popup__subtitle');
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
const popupImageButtonClose = popupImage.querySelector('.popup__buttons-close');
const popupAddCardButtonClose = popupAddCard.querySelector('.popup__buttons-close');
const popupEditProfileButtonClose = popupEditProfile.querySelector('.popup__buttons-close');
const form = document.querySelector('.popup__form');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__inputs',
  submitButtonSelector: '.popup__buttons-save',
  inactiveButtonClass: 'popup__buttons-save_invalid',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_visible',
};

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
//  слушатель закрытия попап по клику вне контейнера
  popup.addEventListener('click', (evt) => {
    if (!evt.target.closest('.popup__container_type_target')) {
      closePopup(popup);
    }
  })
 // слушатель закрытия попап по нажатии Esc
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  })
}

// f закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
// удаление  слушатель закрытия попап по клику вне контейнера
  popup.removeEventListener('click', (evt) => {
    if (!evt.target.closest('.popup__container_type_target')) {
      closePopup(popup);
    }
  })
// удаление слушатель закрытия попап по нажатии Esc
document.removeEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closePopup(popup);
  }
})
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
  toggleButtonState(inputList, buttonElement, config);
}

// f открытие PopupImage
function openPopupImage (evt) {
  openPopup(popupImage);
  cardImage.src = evt.target.src;
  cardImage.alt = evt.target.alt.textContent;
  cardSubtitle.textContent = evt.target.alt;
}

// f 
function handleSubmit(evt) {
  evt.preventDefault();
  console.log({
    username: inputNamePopupEditProfile.value,
    hobby: inputHobbyPopupEditProfile.value,
    place: inputNamePopupAddCard.value,
    link: inputHobbyPopupAddCard.value,
  })

}
// СЛУШАТЕЛИ:


// слушатель кнопки Закрыть PopupImage
popupImageButtonClose.addEventListener('click', () => {
closePopup(popupImage);
});

// на кнопку Редактировать
buttonEdit.addEventListener('click', () => {
  openPopup(popupEditProfile);
  inputNamePopupEditProfile.value = profileName.textContent;
  inputHobbyPopupEditProfile.value = profileSubtitle.textContent;
});
// слушатель на кнопку закрыть popupEditProfile
popupEditProfileButtonClose.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
// слушатель на кнопку Сохранить popupEditProfile
popupEditProfile.addEventListener('submit', submitPopupEditProfile);

// на кнопку Добавить
buttonAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
  inputNamePopupAddCard.value = '';
  inputHobbyPopupAddCard.value = '';
});
// слушатель на кнопку Закрыть popupAddCard
popupAddCardButtonClose.addEventListener('click', () => {
  closePopup(popupAddCard);
});
// слушатель на кнопку Создать
popupAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  cardContainer.prepend(createCard(inputNamePopupAddCard.value, inputHobbyPopupAddCard.value));
  inputNamePopupAddCard.value ='';
  inputHobbyPopupAddCard.value ='';
  closePopup(popupAddCard);
});

// слушатель формы
form.addEventListener('submit', handleSubmit);
// подключаем валидацию
enableValidation(validationConfig);
