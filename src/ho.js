module.exports = {
  map: (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result[i] = fn(arr[i]);
    }
    return result;
  },

  filter: (arr, fn) => {

  },

  reduce: (arr, fn) => {

  }
};
