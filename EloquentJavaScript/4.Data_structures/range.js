const range = (first, last) => {
  const result = []
  if (first < last) {
    for (let i = first; i <= last; i++) {
      result.push(i)
    }
  }
  if (first > last) {
    for (let i = first; i >= last; i--) {
      result.push(i)
    }
  }

  return result
}

const reducer = (accumulator, current) => accumulator + current

const sum = arr => {
  return arr.reduce(reducer)
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1))
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)))
// → 55
