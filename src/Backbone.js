export default class Backbone {
  constructor(options) {
    this.rootElement = options.rootElement;
    this.routes = options.routes           || {};
    this.views = options.views             || {};
    this.models = options.models           || {};
    this.collections = options.collections || {};
  }
}
