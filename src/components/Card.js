export class Card {
  constructor(card, templateSelector, handleCardClick, handleCardDelete, hadlerLike, handlerDislike) {
    this._templateSelector = templateSelector;
    this._name = card.name;
    this._link = card.link;
    this._alt = `Изображение ${card.name}`;
    this._element = this._getTemplate();
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this.cardId = card._id;
    this._cardOwner = card.owner;
    this.likesArray = card.likes;
    this._handlerLike = hadlerLike;
    this._handlerDislike = handlerDislike
    this._element.isLiked = card.isLiked;
    this._likeButton = this._element.querySelector('.place-card__buttons-like');
    this._likeCounter = this._element.querySelector('.place-card__like-counter');
    this._userId = card.userId;
  }
  
  _getTemplate() {
    const cardClone = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.place-card')
    .cloneNode(true);
    return cardClone;
  }

  generateCard() {
    this._cardImage = this._element.querySelector('.place-card__image');
    this._element.querySelector('.place-card__subtitle').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._element.id = this.cardId;
    this._element.owner = this._cardOwner;
    // проверка лайкнул ли я эту карточку
    if (this.likesArray.find(element => element._id === this._userId)) {
      this._element.isLiked = true;
      this._likeButton.classList.add('place-card__buttons-like_active');
     } else {
      this._element.isLiked = false;
      this._likeButton.classList.remove('place-card__buttons-like_active');
     }
    // проверка моя ли карточка
    if (this._element.owner._id === this._userId) {
      this._element.isMine = true;
    } else {
      this._element.isMine = false;
      this._buttonImage = this._element.querySelector('.place-card__buttons-delete');
      this._buttonImage.style = 'visibility: hidden;';
    }
    this._likeCounter.textContent = this.likesArray.length;
    this._setEventListener();
    return this._element;
  }

  _setEventListener() {
    this._element.querySelector('.place-card__buttons-delete').addEventListener('click', () => {
      this._handleCardDelete(this);
    });

    this._likeButton.addEventListener('click', () => {
      this.setlikeCard(this, this._element.isLiked);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }

  removeCard() {
    this._element.remove();
    this._element = '';
  }

  setlikeCard(card, isLiked) {
    if (isLiked) {
      this._handlerDislike(card);
    } else this._handlerLike(card);
  }

  putLikes(data) {
    if (data.likes.find(element => element._id === this._userId)) {
      this._element.isLiked = true;
      this._likeButton.classList.add('place-card__buttons-like_active');
     } else {
      this._element.isLiked = false;
      this._likeButton.classList.remove('place-card__buttons-like_active');
     }
    this._likeCounter.textContent = data.likes.length
  }
}