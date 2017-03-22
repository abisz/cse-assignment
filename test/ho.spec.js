const test = require('tape');

const { map, filter, reduce } = require('../src/ho');

test('map()', (assert) => {
  const orig = [1, 2, 3];

  assert.deepEqual(map(orig, e => e * 2), [2, 4, 6], 'return value as expected');
  assert.deepEqual(orig, [1, 2, 3], 'original value didn\'t change');

  assert.end();
});
