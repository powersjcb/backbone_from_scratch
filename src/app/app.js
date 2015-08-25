import Backbone from '../Backbone.js';  // used to create app
import Routers from '../routers/index.js';

const rootElement = document.getElementById('content');

class App {
  Views: {}
  Models: {}
  Collections: {}
  Routers: {}

  constructor() {
    this.router = new Routers.CatRouter({
      rootElement: rootElement
    });
  }
}

const BackboneApp = new App();

export default BackboneApp;
