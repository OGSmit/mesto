export default class UserInfo {
  constructor({name, hobby}, data) {
    this._dataName = name;
    // this._dataName = document.querySelector(name).textContent
    this._dataHobby = hobby;
    this._data = data;
  }
// Дублирование строк не удалось избежать т.к.
//  переменная конструктора this._dataName = document.querySelector(name).textContent работала некорректно
  getUserInfo() {
    this._objectFromInputs = {};
    this._objectFromInputs.name = document.querySelector(this._dataName).textContent;
    this._objectFromInputs.hobby = document.querySelector(this._dataHobby).textContent;
    return this._objectFromInputs;
  }

  setUserInfo() {
    document.querySelector(this._dataName).textContent = this._data.name;
    document.querySelector(this._dataHobby).textContent = this._data.link;
  }
}