export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getInitialCard() {
    return fetch(this.url, {
      headers: this.headers
    })
  }

  _removeCard() {

  }

  _addCard() {

  }

  _editAvatar() {

  }

  _editProfile() {

  }

  _likeCard() {

  }
}