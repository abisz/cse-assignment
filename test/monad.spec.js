const test = require('tape');

const monad = require('../src/monad');

test('monad', (assert) => {
  assert.equal(typeof monad(), 'function', 'is a function');
  assert.deepEqual(monad([1, 2, 3])(), [1, 2, 3], 'init value was passed');

  assert.end();
});

test('monad.input()', (assert) => {
    assert.deepEqual(monad().input([1, 2, 3])(), [1, 2, 3], 'input data was passed');
    assert.deepEqual(monad().input([1, 2, 3])(), monad([1, 2, 3])(), 'init value has same effect as input()');
    assert.end();
});

test('monad.map()', (assert) => {
  const orig = [1, 2, 3];

  assert.deepEqual(monad(orig).map(e => e * 2)(), [2, 4, 6], 'output as expected');
  assert.deepEqual(orig, [1, 2, 3], 'input data was not mutated');

  assert.end();
});

test('monad.reduce()', (assert) => {
  const orig = [1, 2, 3];

  assert.deepEqual(monad(orig).reduce((prev, cur) => cur + prev, 0)(), 6, 'output as expected');
  assert.deepEqual(orig, [1, 2, 3], 'input data was not mutated');

  assert.end();
});

test('monad.odd()', (assert) => {
  const orig = [1, 2, 3];

  assert.deepEqual(monad(orig).odd()(), [1, 3], 'output as expected');
  assert.deepEqual(orig, [1, 2, 3], 'input data was not mutated');

  assert.end();
});

test('monad.sum()', (assert) => {
  const orig = [1, 2, 3];

  assert.deepEqual(monad(orig).sum()(), 6, 'output as expected');
  assert.deepEqual(orig, [1, 2, 3], 'input data was not mutated');

  assert.end();
});

test('monad.mul()', (assert) => {
  const orig = [1, 2, 3];

  assert.deepEqual(monad(orig).mul(2)(), [2, 4, 6], 'output as expected');
  assert.deepEqual(orig, [1, 2, 3], 'input data was not mutated');

  assert.end();
});

test('monad method chaining', (assert) => {
  const orig = [1, 2, 3];

  assert.deepEqual(
    monad()
      .input(orig)
      .odd()
      .mul(2)
      .sum()
      ()
    , 8, 'output as expected');
  assert.deepEqual(orig, [1, 2, 3], 'input data was not mutated');

  assert.end();
});
