import Backbone from '../Backbone';
import _ from 'lodash';

class View extends Backbone {

  constructor(options) {
    super();

    this.model = options.model;
    this.collection = options.collection;

    // reasonable view defaults
    if (!this.tagName) {
      this.tagName = 'div';
    }

    if (!this.className) {
      this.className = '';
    }
    this._classNames = _(className.split(' '));


    // create html elements that will be filled by template
    this.el = document.createElement(this.tagName);
    this.el.className = this.tagName;
  }

  remove() {
    this.el.className.remove();
  }
}

export default View;
