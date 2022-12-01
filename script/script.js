let buttonEdit = document.querySelector('.button_type_edit');
let popup = document.querySelector('.pop-up');
let buttonSave = document.querySelector('.button_type_save');
let popupClose = document.querySelector('.pop-up__close');

buttonEdit.addEventListener('click', openPopup);
buttonSave.addEventListener('click', formSave);
popupClose.addEventListener('click', closePopup);
// Находим форму в DOM
let form = document.querySelector('.popup__container');
// Находим поля формы в DOM
let inputName = document.querySelector('.pop-up__input-name');
let inputHobby = document.querySelector('.pop-up__input-hobby');

let name = document.querySelector('.profile-data__name');
let hobby = document.querySelector('.profile-data__subtitle');

// функция открытия поп ап
function openPopup() {
  popup.classList.add('pop-up__opened');
  inputName.value = name.textContent;
  inputHobby.value = hobby.textContent;
}

// функция работы с формой
function formSave(evt) {
  evt.preventDefault();

  name.textContent = inputName.value;
  hobby.textContent = inputHobby.value;

  buttonSave.addEventListener('click', closePopup);
}

// функция закрытия поп ап
function closePopup() {
  popup.classList.remove('pop-up__opened');
}