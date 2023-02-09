export default class UserInfo {
  constructor({name, hobby}) {
    this._dataName = document.querySelector(name);
    this._dataHobby = document.querySelector(hobby);
  }

  getUserInfo() {
    return {
      name: this._dataName.textContent,
      hobby: this._dataHobby.textContent
    };
  }

  setUserInfo(data) {
    this._data = data;
    this._dataName.textContent = this._data.name;
    this._dataHobby.textContent = this._data.link;
  }
}