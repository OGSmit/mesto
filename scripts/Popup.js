export class Popup {
  constructor(popupSelector) {
     this._popupSelector = popupSelector;
     this._popupBySelector = document.querySelector(this._popupSelector);
  }

  open() {
    this._popupBySelector.classList.add('popup_opened');
    this.setEventListener();
  }

  close() {
    this._popupBySelector.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      openedPopup.classList.remove('popup_opened');
    }
  }

  setEventListener() {
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });

    this._popupBySelector.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
    })
  }
}

export class PopupWithImage extends Popup {
  constructor(popupSelector, name, link) {
    super(popupSelector);
    this._name = name;
    this._link = link;
    this._imageFromPopup = document.querySelector(this._popupSelector).querySelector('.popup__image');
    this._popupSubtitle = document.querySelector(this._popupSelector).querySelector('.popup__subtitle');
  }

  open() {
    // В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
    super.open();
    this._imageFromPopup.src = this._link;
    this._imageFromPopup.alt = this._name;
    this._popupSubtitle.textContent = this._name;
  }
}

export class PopupWithForm extends Popup {
  constructor(popupSelectort, callBackSubmit, profileName, profileSubtitle) {
    super(popupSelectort);
    this._callBackSubmit = callBackSubmit;
    this._profileSubtitle = profileSubtitle.textContent;
    this._profileName = profileName.textContent;
  }

  // _getInputValues() {
  //  this._inputName = this._popupBySelector.querySelector('.popup__inputs_type_name').value;
  //  this._inputHobby = this._popupBySelector.querySelector('.popup__inputs_type_hobby').value;
  // }

  setEventListeners() {
    // должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
  }

  open() {
    super.open();
    // this._getInputValues();
    this._popupBySelector.querySelector('.popup__inputs_type_name').value = this._profileName;
    this._popupBySelector.querySelector('.popup__inputs_type_hobby').value = this._profileSubtitle;
  }

  close() {
    //так как при закрытии попапа форма должна ещё и сбрасываться.
  }
}