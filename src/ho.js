module.exports = {
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

  reduce: (arr, fn) => {

  }
};
