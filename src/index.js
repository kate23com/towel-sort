

module.exports = function towelSort (matrix) {
  let newArr = [];

  if (matrix === undefined) return [];

  for (let i = 0; i < matrix.length; i++) {
    i % 2 !== 0 ? matrix[i].reverse() : matrix[i];
    for (let subel of matrix[i]) {
      newArr.push(subel)
    }
  }

  return newArr;
}
