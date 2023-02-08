export default class UserInfo {
  constructor({name, hobby}) {
    this._dataName = document.querySelector(name);
    // this._dataName = document.querySelector(name).textContent
    this._dataHobby = document.querySelector(hobby);
  }
// Дублирование строк не удалось избежать т.к.
//  переменная конструктора this._dataName = document.querySelector(name).textContent работала некорректно
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