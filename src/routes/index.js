import Router from './base.js';

export default class AppRouter extends Router {

  routes: {
    "" : "root"
  }

  root() {
    const catView = new BackboneViews.CatViews();

    _swapView(catView);
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
