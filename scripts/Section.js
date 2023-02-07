export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._containerSelector = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._items = items;
  }

  rendererAll() {
    this._items.forEach((element) => {
      this._renderer(element);
    });
  }

  addItem(item) {
    this._containerSelector.prepend(item);
  }
}