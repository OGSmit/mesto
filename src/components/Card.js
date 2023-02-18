export class Card {
  constructor(name, link, cardId, cardOwner, sumLikes, templateSelector, handleCardClick, handleCardDelete, hadlerLike) {
    this._templateSelector = templateSelector;
    this._name = name;
    this._link = link;
    this._alt = `Изображение ${name}`;
    this._element = this._getTemplate();
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._cardId = cardId;
    this._cardOwner = cardOwner;
    this.sumLikes = sumLikes;
    this._handlerLike = hadlerLike;
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
    this._element.id = this._cardId;
    this._element.owner = this._cardOwner;
    this._element.querySelector('.place-card__like-counter').textContent = this.sumLikes;
    if (this._element.owner !== 'e468b0f926f4b1d0d0235376') { // поменять на api.getProfile
      this._buttonImage = this._element.querySelector('.place-card__buttons-delete');
      this._buttonImage.style = 'visibility: hidden;';
    }
    this._setEventListener();
    return this._element;
  }

  _like(evt) {
    evt.target.classList.toggle('place-card__buttons-like_active');
    this._handlerLike(this._cardId);
  }

  _setEventListener() {
    this._element.querySelector('.place-card__buttons-like').addEventListener('click', (evt) => {
      this._like(evt);
    });

    this._element.querySelector('.place-card__buttons-delete').addEventListener('click', (evt) => {
      this._handleCardDelete(evt);
    })

    this._element.querySelector('.place-card__image').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }

  _removeCard(evt) {
    evt.target.closest('.place-card').remove(evt);
    // this._element = null;
  }
}