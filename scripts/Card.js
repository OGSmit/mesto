import { initialCards } from './massive.js';

const cardContainer = document.querySelector('.profile-content');

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
    this._setEventListener();
    return this._element;
  }
  
  static renderCard () { // что за static ? 
    initialCards.forEach((data) => {
      const card = new Card(data.name, data.link, '#template');
      const cardElement = card._generateCard();
      
      cardContainer.prepend(cardElement);
    });
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

    this._element.querySelector('.place-card__image').addEventListener('click', (evt) => {
      this._openPopupImage(evt);
    })
  }

  _removeCard(evt) {
    evt.target.closest('.place-card').remove();
  }

  _openPopupImage() {
    const popupImage = document.querySelector('#popup_image');
    popupImage.classList.add('popup_opened');
    const buttonClose = popupImage.querySelector('.popup__buttons-close');
    buttonClose.addEventListener('click', () => {
      popupImage.classList.remove('popup_opened');
    });

    popupImage.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup')) {
        popupImage.classList.remove('popup_opened');
      }
    });

   document.addEventListener('keydown', (evt) => {
     if (evt.key === 'Escape') {
      popupImage.classList.remove('popup_opened');
     }
   });
}}