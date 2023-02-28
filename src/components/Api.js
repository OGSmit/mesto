export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getInitialCard() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    }).then(this._checkResponse).catch(err => console.log(err))
  }

  getProfile() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers
    }).then(this._checkResponse).catch(err => console.log(err))
  }

  removeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    }).then(this._checkResponse).catch(err => console.log(err))
  }

  addCard(objectFromInputs) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: objectFromInputs.name,
        link: objectFromInputs.link 
      })
    }).then(this._checkResponse).catch(err => console.log(err))
  }

  editAvatar(objectFromInputs) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: objectFromInputs.avatar
      })
    }).then(this._checkResponse).catch(err => console.log(err))
  };

  editProfile(objectFromInputs) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: objectFromInputs.name,
        about: objectFromInputs.about
      })
    }).then(this._checkResponse).catch(err => console.log(err))
  }

  addlikeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers
    }).then(this._checkResponse).catch(err => console.log(err))
  }

  removelikeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers
    }).then(this._checkResponse).catch(err => console.log(err))
  }

  _checkResponse(res) {
    if(res.ok) {
      //console.log(res);
      return res.json();
    } else {
      return console.log('api.getInitialCard catch some Error')
    }
  }
}