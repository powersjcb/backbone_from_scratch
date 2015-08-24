import BackboneView from '../base.js';

class CatView extends BackboneView {

  constructor() {
    super();
  }

  template(options) {
    return '<div>' + options.text + '</div>';
  }

  render() {
    const content = template({text: 'Some strings to output'});
    // remove old content and listeners first?
    this.el.innerHTML = content;
    return this;
  }
}

export default CatView;
