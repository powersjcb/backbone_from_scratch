import Backbone from '../Backbone.js';  // used to create app
import BackboneViews from '../views/index.js'; // imports views
import BackboneModels from '../models/index.js';  // imports models
import BackboneCollections from '../collections/index.js'; // imports collections
// import BackboneRoutes from '../collections/index.js'; // imports collections

const rootElement = document.getElementById('content');
const BackboneApp = new Backbone({
  rootElement: rootElement,
  views: BackboneViews,
  models: BackboneModels,
  collections: BackboneCollections,
  // routes: BackboneRoutes
});


export default BackboneApp;
