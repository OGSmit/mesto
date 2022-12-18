let popup = document.querySelector('.popup');
let formEdit = document.querySelector('.profiles__buttons-edit');
let buttonSave = document.querySelector('.popup__form');
let popupClose = document.querySelector('.popup__buttons-close');
let inputName = document.querySelector('.popup__inputs_type_name');
let inputHobby = document.querySelector('.popup__inputs_type_hobby');
let gname = document.querySelector('.profiles__name');
let hobby = document.querySelector('.profiles__subtitle');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

const buttonAdd = document.querySelector('.profiles__buttons-add');
const userTemplate = document.querySelector('#template').content;
const cardContainer = document.querySelector('.profile-content');
const popupTitle = document.querySelector('.popup__title');
const buttonLike = document.querySelector('.place-card__buttons-like');
const buttonDelete = document.querySelector('.place-card__buttons-delete');
// функция открытия поп ап
function openPopup() {
  buttonSave.removeEventListener('submit', saveCard);
  popup.classList.add('popup_opened');
  inputName.value = gname.textContent;
  inputHobby.value = hobby.textContent;
  buttonSave.addEventListener('submit', formSave);
}
// функция работы с формой
function formSave(evt) {
  evt.preventDefault();
  gname.textContent = inputName.value;
  hobby.textContent = inputHobby.value;
  closePopup();
}
// функция закрытия поп ап
function closePopup() {
  popupTitle.textContent = 'Редактировать профиль';
  popup.classList.remove('popup_opened');
}

// функция кнопки лайк
function like() {
  buttonLike.classList.toggle('place-card__buttons-like_active');
}

// Слушатели
formEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
buttonAdd.addEventListener('click', openPopupCards);
// buttonLike.addEventListener('click', like);


  // функция открытия попап карточек
  function openPopupCards (evt) {
    evt.preventDefault();
    buttonSave.removeEventListener('submit', formSave);
    popup.classList.add('popup_opened');
    popupTitle.textContent = 'Новое место';
    inputHobby.value = '';
    inputName.value = '';
    buttonSave.addEventListener('submit', saveCard);
  }
  
  // функция удаления карточки
  // function removeCard() {
  //   card.remove();
  // }
  
  const card = userTemplate.querySelector('.place-card').cloneNode(true);
  // функция создания карточки
  function createCard () {
    card.querySelector('.place-card__image').src = inputHobby.value;
    card.querySelector('.place-card__subtitle').textContent = inputName.value;
    return card;
  }
  
  // функция добавления карточки в html
function addCard () {
  cardContainer.append(createCard());
}

// функция сохранения карточки
function saveCard (evt) {
  evt.preventDefault();
  createCard();
  addCard();
  inputHobby.value = '';
  inputName.value = '';
  closePopup();
}
