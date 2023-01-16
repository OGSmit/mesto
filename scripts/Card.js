import { initialCards } from './massive.js';

// const cardImage = document.querySelector('.place-card__image');
const cardContainer = document.querySelector('.profile-content');
// const temlplate = document.querySelector('#template');

export class Card {
  constructor(name, link, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.place-card')
      .cloneNode(true);
    return cardElement;
  }
  
  _generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.place-card__subtitle').textContent = this._name;
    this._element.querySelector('.place-card__image').src = this._link;
    return this._element;
  }

  static renderCard () { // что за static ? 
   initialCards.forEach((data) => {
    const card = new Card(data.name, data.link, '#template');
    const cardElement = card._generateCard();
    cardContainer.prepend(cardElement);
   });
  }
} 