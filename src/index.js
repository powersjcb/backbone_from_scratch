/*
* initializes the app after all the html content has loaded
*/
document.addEventListener('DOMContentLoaded', () => {
  document.BackboneApp = require('./app/app.js');
});
