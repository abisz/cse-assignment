const monad = (init = []) => {
  let data = init;

  const dispatcher = () => {
    return data;
  };

  return dispatcher;
};

module.exports = monad;
