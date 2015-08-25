import BackboneView from '../base.js';

class CatView extends BackboneView {
  constructor() {
    super();
  }

  template(options) {
    // TODO: implement models and maybe templating
    // const line1 = '<div>' + options. + '</div>';
    const line2 = '<div>' + options.text + '</div>';
    return line2;
  }

  render() {
    const viewData = {text: 'Some strings to output'};
    const content = template(viewData);

    // remove old content and listeners first?
    this.el.innerHTML = content;
    return this;
  }
}

export default CatView;
