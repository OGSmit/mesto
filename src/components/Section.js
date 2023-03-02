export default class Section {
  constructor({renderer}, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  rendererAll(items) {
    this._items = items;
    this._items.forEach((element) => {
      this._renderer(element);
    });
  }

  addItemAppend(item) {
    this._container.append(item);
  }

  addItemPrepend(item) {
    this._container.prepend(item);
  }
}