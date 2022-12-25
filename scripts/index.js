const popupEditProfile = document.querySelector('#popup_edit-profile');
const popupAddCard = document.querySelector('#popup_add-card');
const buttonEdit = document.querySelector('.profiles__buttons-edit');
const profileName = document.querySelector('.profiles__name');
const profileSubtitle = document.querySelector('.profiles__subtitle');
const buttonDelete = document.querySelector('.place-card__buttons-delete');
const userTemplate = document.querySelector('#template').content;
const cardContainer = document.querySelector('.profile-content');
const buttonAdd = document.querySelector('.profiles__buttons-add');

// отрисовка массива
initialCards.forEach(object => {
  const card = userTemplate.querySelector('.place-card').cloneNode(true);
  createCard(card);
  card.querySelector('.place-card__image').alt = 'фотография ' + object.name;
  card.querySelector('.place-card__image').src = object.link;
  card.querySelector('.place-card__subtitle').textContent = object.name;
  return cardContainer.prepend(card);
});

// Унф открытия попапов
  function openPopup(popup) {
    popup.classList.add('popup_opened');
  }

  // Унф открытия попапов
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }

// ф открытие popupEditProfile////////////////////////////////
function openPopupEditProfile() {
  const popupButtonClose = popupEditProfile.querySelector('.popup__buttons-close');
  const popupButtonSave = popupEditProfile.querySelector('.popup__form');
  openPopup(popupEditProfile);
  const inputName = popupEditProfile.querySelector('.popup__inputs_type_name');
  const inputHobby = popupEditProfile.querySelector('.popup__inputs_type_hobby');
  inputName.value = profileName.textContent;
  inputHobby.value = profileSubtitle.textContent;
  popupButtonClose.addEventListener('click', () => { 
    closePopup(popupEditProfile);
  });
  function submitPopupEditProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileSubtitle.textContent = inputHobby.value;
    closePopup(popupEditProfile);
  }
  popupButtonSave.addEventListener('submit', submitPopupEditProfile);
}
buttonEdit.addEventListener('click', openPopupEditProfile);

// ф открытие popupAddCard////////////////////////////////////
function openPopupAddCard() {
  openPopup(popupAddCard);
  const popupButtonSave = popupAddCard.querySelector('.popup__form');
  const popupButtonClose = popupAddCard.querySelector('.popup__buttons-close');
  const card = userTemplate.querySelector('.place-card').cloneNode('true');
  const inputName = popupAddCard.querySelector('.popup__inputs_type_name');
  const inputHobby = popupAddCard.querySelector('.popup__inputs_type_hobby');
  popupButtonClose.addEventListener('click', () => { 
    closePopup(popupAddCard);
  });
  popupButtonSave.addEventListener('submit', (evt) => {
    evt.preventDefault();
    createCard(card);
    card.querySelector('.place-card__image').src = inputHobby.value;
    card.querySelector('.place-card__subtitle').textContent = inputName.value;
    card.querySelector('.place-card__image').alt = 'изображение' + inputName.value;
    inputHobby.value = '';
    inputName.value = '';
    const firstChild = cardContainer.firstChild;
    cardContainer.insertBefore(card, firstChild);
    closePopup(popupAddCard);
  });
}
buttonAdd.addEventListener('click', openPopupAddCard);

// Функционал создания карточки следует вынести в функцию createCard , она должна просто возвращать карточку 
// с установленными на её элементы слушателями для установки лайка, удаления карточки и открытия попала с изображением 
// Данная функция не должна добавлять карточку в DOM. Это нужно для того, чтобы избежать дублирования кода при создании карточки 
// через попап и при отрисовке изначальных карточек
function createCard(card) {
  let buttonLike = card.querySelector('.place-card__buttons-like');
  function like() {
    const buttonLike = card.querySelector('.place-card__buttons-like');
    buttonLike.classList.toggle('place-card__buttons-like_active');
  }
  buttonLike.addEventListener('click', like);
  const cardImage = card.querySelector('.place-card__image');
  function openPopupImage () {
    document.querySelector('.popup-image__image').src = card.querySelector('.place-card__image').src;
    document.querySelector('.popup-image__subtitle').textContent = card.querySelector('.place-card__subtitle').textContent;
    let popupImage = document.querySelector('.popup-image');
    popupImage.classList.toggle('popup-image_opened');
    const buttonClosePopupImage = document.querySelector('.popup-image__buttons-close');
    buttonClosePopupImage.addEventListener('click', () => {
      popupImage.classList.remove('popup-image_opened');
    });
  }
  cardImage.addEventListener('click', openPopupImage);
  const buttonDelete = card.querySelector('.place-card__buttons-delete');
  function removeCard () {
    card.remove();
  }
  buttonDelete.addEventListener('click', removeCard);
  return card;
}

