let popup = document.querySelector('.popup');
let formEdit = document.querySelector('.profiles__buttons-edit');
let buttonSave = document.querySelector('.popup__form');
let popupClose = document.querySelector('.popup__buttons-close');
let inputName = document.querySelector('.popup__inputs_type_name');
let inputHobby = document.querySelector('.popup__inputs_type_hobby');
let gname = document.querySelector('.profiles__name');
let hobby = document.querySelector('.profiles__subtitle');
// Проект 5 
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
  }
];
let buttonAdd = document.querySelector('.profiles__buttons-add');
const userTemplate = document.querySelector('.test').content;
const usersOnline = document.querySelector('.profile-content');
const userElement = userTemplate.querySelector('.place-card').cloneNode(true);

userElement.querySelector('.place-card__image').src = initialCards[0].link;
userElement.querySelector('.place-card__subtitle').textContent = initialCards[0].name;
usersOnline.append(userElement);

// функция открытия поп ап
function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = gname.textContent;
  inputHobby.value = hobby.textContent;
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
  popup.classList.remove('popup_opened');
}

formEdit.addEventListener('click', openPopup);
buttonSave.addEventListener('submit', formSave);
popupClose.addEventListener('click', closePopup);


// функция открытия поп ап карточек
function openPopupCards () {
  popup.classList.add('popup_opened');
  let popupTitle = document.querySelector('.popup__title');
  popupTitle.textContent = 'Новое место';
  let popupSubtitle = document.querySelector('.place-card__subtitle');
  inputName.value = popupSubtitle.textContent;
}

buttonAdd.addEventListener('click', openPopupCards);