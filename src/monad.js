const monad = (init = []) => {
  let data = init;

  const dispatcher = () => {
    return data;
  };

  Object.defineProperty(dispatcher, 'input', {
    value: (arr) => {
      data = arr;
      return dispatcher;
    }
  });

  return dispatcher;
};

module.exports = monad;
