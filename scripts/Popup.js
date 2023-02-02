export default class Popup {
  constructor(popupSelector) {
     this._popupSelector = popupSelector;
  }

  open() {

  }

  close() {

  }

  _handleEscClose() {

  }

  setEventListener() {

  }
}

export class PopupWithImage extends Popup {
  constructor(callBackSubmit) {
    super(popupSelectort);
  }

  open() {
    // В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
  }
}

export class PopupWithForm extends Popup {
  constructor() {
    super(popupSelectort);
    this._callBackSubmit = callBackSubmit;
  }

  _getInputValues() {

  }

  setEventListeners() {
    // должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
  }

  close() {
    //так как при закрытии попапа форма должна ещё и сбрасываться.
  }
}