export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getInitialCard() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    })
  }

  getProfile() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers
    })
  }

  _removeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
  }

  _addCard(objectFromInputs) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: objectFromInputs.name,
        link: objectFromInputs.link
      })
    })
  }

  _editAvatar(objectFromInputs) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: objectFromInputs.avatar
      })
    })
  }

  _editProfile(objectFromInputs) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: objectFromInputs.name,
        about: objectFromInputs.about
      })
    })
  }

  _addlikeCard() {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers
    })
  }

  _removelikeCard() {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers
    })
  }
}