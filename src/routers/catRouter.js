import Router from './base.js';
import BackboneViews from '../views/index.js';

export default class CatRouter extends Router {

  constructor(options) {
    super(options);
  }

  routes: {
    "" : "root"
  }

  root() {
    const catView = new BackboneViews.CatShow({});

    this._swapView(catView);
  }

  _swapView(view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;

    this.rootElement.innerHTML = view.el; // inserts dom element into page
    view.render(); // populates innerHTML of view
  }
}
