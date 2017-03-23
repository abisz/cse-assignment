const { map, reduce, filter } = require('./ho');

const monad = (init = []) => {
  let data = init;

  const dispatcher = () => {
    return data;
  };

  Object.defineProperties(dispatcher, {
    'input': {
      value: (arr) => {
        data = arr;
        return dispatcher;
      }
    },
    'map': {
      value: (fn) => {
        data = map(data, fn);
        return dispatcher;
      }
    },
    'reduce': {
      value: (fn, init) => {
        data = reduce(data, fn, init);
        return dispatcher;
      }
    },
    'odd': {
      value: () => {
        data = filter(data, e => e % 2);
        return dispatcher;
      }
    },
    'sum': {
      value: () => {
        data = reduce(data, (prev, cur) => cur + prev, 0);
        return dispatcher;
      }
    },
    'mul': {
      value: () => {
        data = map(data, e => e * 2);
        return dispatcher;
      }
    }
  });

  return dispatcher;
};

module.exports = monad;
