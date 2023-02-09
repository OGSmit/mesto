export class Popup {
  constructor(popupSelector) {
     this._popupBySelector = document.querySelector(popupSelector);
  }

  open() {
    this._popupBySelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupBySelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
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