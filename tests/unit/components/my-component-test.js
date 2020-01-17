import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import createComponent from 'ember-component-test-sandbox/tests/helpers/create-component';

module('Unit | Component | my-component', function(hooks) {
  setupTest(hooks);

  test('passing object literal', function(assert) {
    let taskVal = { something: true };
    createComponent('component:my-component', { taskVal });
    assert.equal(taskVal.something, 42);
  });

  test('passing object directly', function(assert) {
    let args = { taskVal: { something: true } };
    createComponent('component:my-component', args);
    assert.equal(args.taskVal.something, 42);
  })
});
