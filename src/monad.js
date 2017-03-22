const { map } = require('./ho');

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
    }
  });

  return dispatcher;
};

module.exports = monad;
