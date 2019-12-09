const arrays = [[1, 2, 3], [4, 5], [6]]
const reducer = (acc, curr) => {
  return acc.concat(curr)
}
console.log(arrays.reduce(reducer, []))
console.log(arrays.flat())
// Your code here.
// → [1, 2, 3, 4, 5, 6]
