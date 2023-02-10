export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._containerBySelector = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._items = items;
  }

  rendererAll() {
    this._items.forEach((element) => {
      this._renderer(element);
    });
  }

  addItem(item) {
    this._item = item;
    this._containerBySelector.prepend(this._item);
  }
}