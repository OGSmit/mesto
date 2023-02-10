export class Popup {
  constructor(popupSelector) {
     this._popupBySelector = document.querySelector(popupSelector);
  }

  open() {
    this._popupBySelector.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    this._popupBySelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListener() {
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