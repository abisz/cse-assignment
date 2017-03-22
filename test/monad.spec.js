const test = require('tape');

const monad = require('../src/monad');

test('monad', (assert) => {
  assert.equal(typeof monad(), 'function', 'is a function');
  assert.deepEqual(monad([1, 2, 3])(), [1, 2, 3], 'init value is passed');

  assert.end();
});

test('monad.input()', (assert) => {
    assert.deepEqual(monad().input([1, 2, 3])(), [1, 2, 3], 'input data is passed');
    assert.deepEqual(monad().input([1, 2, 3])(), monad([1, 2, 3])(), 'init value has same effect as input()');
    assert.end();
});

test('monad.map()', (assert) => {
  const orig = [1, 2, 3];

  assert.deepEqual(monad(orig).map(e => e * 2)(), [2, 4, 6], 'output as expected');
  assert.deepEqual(orig, [1, 2, 3], 'input data is not mutated');

  assert.end();
});