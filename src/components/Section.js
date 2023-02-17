export default class Section {
  constructor({renderer}, containerSelector) {
    this._containerBySelector = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  rendererAll(items) {
    this._items = items;
    this._items.forEach((element) => {
      this._renderer(element);
    });
  }

  addItem(item) {
    this._item = item;
    this._containerBySelector.append(this._item);
  }
}