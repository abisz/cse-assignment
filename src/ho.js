const ho = {
  map: (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result[i] = fn(arr[i]);
    }
    return result;
  },

  filter: (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) result.push(arr[i]);
    }
    return result;
  },

  reduce: (arr, fn, val) => {
    let result = val;
    for (let i = 0; i < arr.length; i++) {
      result = fn(result, arr[i]);
    }
    return result;
  },

  find: (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) return arr[i];
    }
  },

  curry: (fn, ...args) => {
    return (arr) => {
      return fn(arr, ...args);
    }
  }
};

module.exports = ho;
