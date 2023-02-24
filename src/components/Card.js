export class Card {
  constructor(card, templateSelector, handleCardClick, handleCardDelete, hadlerLike) {
    this._templateSelector = templateSelector;
    this._name = card.name;
    this._link = card.link;
    this._alt = `Изображение ${card.name}`;
    this._element = this._getTemplate();
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._cardId = card._id;
    this._cardOwner = card.owner;
    this.likesArray = card.likes;
    this._handlerLike = hadlerLike;
    this._isLiked = card.isLiked;
    this._isMine = card.isMine;
  }
  
  _getTemplate() {
    const cardClone = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.place-card')
    .cloneNode(true);
    return cardClone;
  }
  
  _addLikeCard(cardId, isLiked) {
    this._handlerLike(cardId, isLiked);
  }

  _generateCard() {
    this._cardImage = this._element.querySelector('.place-card__image');
    this._element.querySelector('.place-card__subtitle').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._element.id = this._cardId;
    this._element.owner = this._cardOwner;
    // проверка лайкнул ли я эту карточку
    if (this._isLiked) {
      this._element.querySelector('.place-card__buttons-like').classList.add('place-card__buttons-like_active')
    } else this._element.querySelector('.place-card__buttons-like').classList.remove('place-card__buttons-like_active');

    if (this.likesArray.length === 0) {
      this._element.querySelector('.place-card__like-counter').style = 'visibility: hidden;';
    } else {
      this._element.querySelector('.place-card__like-counter').textContent = this.likesArray.length;
    };

    if (!this._isMine) {
      this._buttonImage = this._element.querySelector('.place-card__buttons-delete');
      this._buttonImage.style = 'visibility: hidden;';
    };

    this._setEventListener();
    return this._element;
  }

  _setEventListener() {
    this._element.querySelector('.place-card__buttons-delete').addEventListener('click', (evt) => {
      this._handleCardDelete(evt);
    });

    this._element.querySelector('.place-card__buttons-like').addEventListener('click', () => {
      this._handlerLike(this._element.id, this._isLiked);
    });

    this._element.querySelector('.place-card__image').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }

  _removeCard(evt) {
    evt.target.closest('.place-card').remove(evt);
  }
}