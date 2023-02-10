export class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
    this._alt = `Изображение ${name}`;
    this._element = this._getTemplate();
    this._handleCardClick = handleCardClick;
  }
  
  _getTemplate() {
    const cardClone = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.place-card')
    .cloneNode(true);
    return cardClone;
  }
  
  _generateCard() {
    this._cardImage = this._element.querySelector('.place-card__image');
    this._element.querySelector('.place-card__subtitle').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._setEventListener();
    return this._element;
  }

  _like(evt) {
    evt.target.classList.toggle('place-card__buttons-like_active');
  }

  _setEventListener() {
    this._element.querySelector('.place-card__buttons-like').addEventListener('click', (evt) => {
      this._like(evt);
    });
    this._element.querySelector('.place-card__buttons-delete').addEventListener('click', (evt) => {
      this._removeCard(evt);
    })
    this._element.querySelector('.place-card__image').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }

  _removeCard(evt) {
    evt.target.closest('.place-card').remove();
    // this._element = null;
  }
}