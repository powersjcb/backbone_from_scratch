import Backbone from '../Backbone';
import _ from 'lodash';

export default class View extends Backbone {

  constructor() {
    super();
    // reasonable view defaults
    if (!this.tagName) {
      this.tagName = 'div';
    }

    if (typeof this.className === 'undefined') {
      this.className = '';
    }
    this._classNames = _(this.className.split(' '));


    // create html elements that will be filled by template
    this.el = document.createElement(this.tagName);
    this.el.className = this.tagName;
  }

  remove() {
    this.el.className.remove();
  }
}
