const test = require('tape');

const { map, filter, reduce, find, curry } = require('../src/ho');

test('map()', (assert) => {
  const orig = [1, 2, 3];

  assert.deepEqual(map(orig, e => e * 2), [2, 4, 6], 'return value as expected');
  assert.deepEqual(orig, [1, 2, 3], 'original value didn\'t change');

  assert.end();
});

test('filter()', (assert) => {
  const orig = [1, 2, 3];

  assert.deepEqual(filter(orig, e => e % 2), [1, 3], 'return value as expected');
  assert.deepEqual(orig, [1, 2, 3], 'original value didn\'t change');

  assert.end();
});

test('reduce()', (assert) => {
  const orig = [1, 2, 3];

  assert.equal(reduce(orig, (prev, cur) => cur + prev, 0), 6, 'return value as expected');
  assert.deepEqual(orig, [1, 2, 3], 'original value didn\'t change');

  assert.end();
});

test('find()', (assert) => {
  const orig = [1, 2, 3];

  assert.equal(find(orig, e => e % 2 === 1), 1, 'return value as expected');
  assert.deepEqual(orig, [1, 2, 3], 'original value didn\'t change');

  assert.end();
});

test('curry', (assert) => {
  const sumArray = curry(reduce, (cur, prev) => cur + prev, 0);
  const orig = [1, 2, 3];

  assert.equal(sumArray(orig), 6);

  assert.end();
});
