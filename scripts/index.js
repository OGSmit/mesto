const popup = document.querySelector('.popup');
const formEdit = document.querySelector('.profiles__buttons-edit');
const buttonSave = document.querySelector('.popup__form');
const popupClose = document.querySelector('.popup__buttons-close');
const inputName = document.querySelector('.popup__inputs_type_name');
const inputHobby = document.querySelector('.popup__inputs_type_hobby');
const gname = document.querySelector('.profiles__name');
const hobby = document.querySelector('.profiles__subtitle');

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

const buttonDelete = document.querySelector('.place-card__buttons-delete');
const userTemplate = document.querySelector('#template').content;
const cardContainer = document.querySelector('.profile-content');
//   // функция создания карточки

initialCards.forEach(object => {
  let card = userTemplate.querySelector('.place-card').cloneNode(true);
  card.querySelector('.place-card__image').alt = 'фотография ' + object.name;
  card.querySelector('.place-card__image').src = object.link;
  card.querySelector('.place-card__subtitle').textContent = object.name;
  let buttonLike = card.querySelector('.place-card__buttons-like');
  
  function like() {
    const button = card.querySelector('.place-card__buttons-like');
      button.classList.toggle('place-card__buttons-like_active');
  }
  buttonLike.addEventListener('click', like);
  const img = card.querySelector('.place-card__image');
  function openImg () {
    document.querySelector('.popup-image__image').src = card.querySelector('.place-card__image').src;
    document.querySelector('.popup-image__subtitle').textContent = card.querySelector('.place-card__subtitle').textContent;
    test.classList.toggle('popup-image_opened');
  }
  img.addEventListener('click', openImg);
  const buttonDelete = card.querySelector('.place-card__buttons-delete');
  function removeCard () {
    card.remove();
  }
  buttonDelete.addEventListener('click', removeCard);
  return cardContainer.prepend(card);
});

let test = document.querySelector('.popup-image');
function close () {
  test.classList.toggle('popup-image_opened');
}
let closeImg = document.querySelector('.popup-image__buttons-close');
closeImg.addEventListener('click', close);


const buttonAdd = document.querySelector('.profiles__buttons-add');
const popupTitle = document.querySelector('.popup__title');

// // функция открытия поп ап
function openPopup() {
  buttonSave.removeEventListener('submit', saveCard2);
  popup.classList.add('popup_opened');
  buttonSave.querySelector('.popup__buttons-save').textContent = 'Сохранить';
  inputName.value = gname.textContent;
  inputHobby.value = hobby.textContent;
  buttonSave.addEventListener('submit', formSave);
}
// // функция работы с формой
function formSave(evt) {
  evt.preventDefault();
  gname.textContent = inputName.value;
  hobby.textContent = inputHobby.value;
  closePopup();
}
// // функция закрытия поп ап
function closePopup() {
  popupTitle.textContent = 'Редактировать профиль';
  popup.classList.remove('popup_opened');
}

// // Слушатели
formEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
buttonAdd.addEventListener('click', openPopupCards);

// // функция открытия попап карточек
function openPopupCards (evt) {
  evt.preventDefault();
  buttonSave.removeEventListener('submit', formSave);
  popup.classList.add('popup_opened');
  buttonSave.querySelector('.popup__buttons-save').textContent = 'Создать';
  popupTitle.textContent = 'Новое место';
  inputHobby.value = '';
  inputName.value = '';
  buttonSave.addEventListener('submit', saveCard2);
}
// функция создания карточки
function createCard2 () {
  let card = userTemplate.querySelector('.place-card').cloneNode(true);
  card.querySelector('.place-card__image').src = inputHobby.value;
  card.querySelector('.place-card__subtitle').textContent = inputName.value;
  // смена классов для кнопки лайк
  function like() {
    console.log('ok');
    const button = card.querySelector('.place-card__buttons-like');
    button.classList.toggle('place-card__buttons-like_active');
  }
  const buttonLike = card.querySelector('.place-card__buttons-like');
  buttonLike.addEventListener('click', like);
  // открытие попап для картинок
  function openImg () {
    document.querySelector('.popup-image__image').src = card.querySelector('.place-card__image').src;
    document.querySelector('.popup-image__subtitle').textContent = card.querySelector('.place-card__subtitle').textContent;
    test.classList.toggle('popup-image_opened');
  }
  const img = card.querySelector('.place-card__image');
  img.addEventListener('click', openImg);
  // удаление карточки из html
  function removeCard () {
    card.remove();
  }
  const buttonDelete = card.querySelector('.place-card__buttons-delete');
  buttonDelete.addEventListener('click', removeCard);

  let popUpCardContainer = document.querySelector('.profile-content');
  let firstChild = popUpCardContainer.firstChild;
  return popUpCardContainer.insertBefore(card, firstChild);
}

//   // функция сохранения карточки
  function saveCard2 (evt) {
    evt.preventDefault();
    createCard2();
    inputHobby.value = '';
    inputName.value = '';
    closePopup();
  }