const test = require('tape');

const monad = require('../src/monad');

test('monad', (assert) => {

  assert.equal(typeof monad(), 'function', 'is a function');
  assert.deepEqual(monad([1, 2, 3])(), [1, 2, 3], 'init value is passed');

  assert.end();
});
