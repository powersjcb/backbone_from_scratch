import Backbone from '../Backbone.js';  // used to create app
import BackboneViews from '../views/index.js'; // imports views
import BackboneModels from '../models/index.js';  // imports models
import BackboneCollections from '../collections/index.js'; // imports collections

class Router extends Backbone {
  constructor(options) {
    super();
    this.rootElement = options.rootElement;
  }


}

export default Router;

class AppRouter extends Router {

  routes: {
    "" : "root"
  }

  root() {
    const catView = new BackboneViews.CatViews();
  }

  _swapView(container, newView) {
    oldView.remove();
    newView.
  }

}
