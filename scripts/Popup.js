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
      this._popupBySelector.classList.remove('popup_opened');
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
    });

    this._popupBySelector.querySelector('.popup__buttons-close').addEventListener('click', () => {
      this.close();
    });
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
    super.open();
    this._imageFromPopup.src = this._link;
    this._imageFromPopup.alt = this._name;
    this._popupSubtitle.textContent = this._name;
  }
}

export class PopupWithForm extends Popup {
  constructor(popupSelectort, callBackSubmit) {
    super(popupSelectort);
    this._callBackSubmit = callBackSubmit;
    this._form = this._popupBySelector.querySelector('.popup__form');
  }

  _getInputValues() {
    this._obj = {};
    this._inputName = this._popupBySelector.querySelector('.popup__inputs_type_name').value;
    this._inputHobby = this._popupBySelector.querySelector('.popup__inputs_type_hobby').value;
    this._obj.name = this._inputName;
    this._obj.link = this._inputHobby;
    return this._obj;
  };

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBackSubmit(this._getInputValues());
      this._form.reset();
      this.close();
    });
  }

  open() {
    super.open()
  }

  close() {
    super.close();
    this._form.reset();
  }

}