export default class UserInfo {
  constructor({name, about}, avatar) {
    this._dataName = document.querySelector(name);
    this._dataAbout = document.querySelector(about);
    this._avatarImage = document.querySelector(avatar)
  }

  getUserInfo() {
    return {
      name: this._dataName.textContent,
      about: this._dataAbout.textContent
    };
  }

  setUserInfo(data) {
    this._data = data;
    this._dataName.textContent = this._data.name;
    this._dataAbout.textContent = this._data.about;
  }

  setUserAvatar(data) {
    this._data = data;
    this._avatarImage.src = this._data.avatar;
  }
}