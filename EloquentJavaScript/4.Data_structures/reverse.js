const reverseArray = arr => {
  return arr.reverse()
}
console.log(reverseArray(['A', 'B', 'C']))
// → ["C", "B", "A"];
const reverseArrayInPlace = arr => {
  return arr.reverse()
}
const arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]
