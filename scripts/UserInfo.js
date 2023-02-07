export default class UserInfo {
  constructor({name, hobby}) {
    this._dataName = document.querySelector(name).textContent; // string
    this._dataHobby = document.querySelector(hobby).textContent; // string
  }

  getUserInfo() {
    this._obj = new Object();
    this._obj.name = this._dataName;
    this._obj.hobby = this._dataHobby;
    return this._obj;
  }

  setUserInfo(data) {
    this._dataName = data.name;
    this._dataHobby = data.link;
  }
}