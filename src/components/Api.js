export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getInitialCard() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    }).then(this._checkResponse)
  }

  getProfile() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers
    }).then(this._checkResponse)
  }

  removeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    }).then(this._checkResponse)
  }

  addCard(objectFromInputs) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: objectFromInputs.name,
        link: objectFromInputs.link 
      })
    }).then(this._checkResponse)
  }

  editAvatar(objectFromInputs) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: objectFromInputs.avatar
      })
    }).then(this._checkResponse)
  };

  editProfile(objectFromInputs) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: objectFromInputs.name,
        about: objectFromInputs.about
      })
    }).then(this._checkResponse)
  }

  addlikeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers
    }).then(this._checkResponse)
  }

  removelikeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers
    }).then(this._checkResponse)
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}