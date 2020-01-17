import Component from '@glimmer/component';

export default class MyComponentComponent extends Component {
  validate() {
    this.args.taskVal.something = 42;
  }

  constructor() {
    super(...arguments);
    this.validate();
  }
}
