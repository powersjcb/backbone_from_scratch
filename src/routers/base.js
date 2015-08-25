import Backbone from '../Backbone.js';  // used to create app

export default class Router extends Backbone {
  constructor(options) {
    super();
    this.rootElement = options.rootElement;
  }

}
