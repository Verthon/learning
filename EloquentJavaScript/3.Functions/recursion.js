const isEven = number => {
  if (number === 0) return true
  else if (number === 1) return false
  else if (number < 0) return null
  return isEven(number - 2)
}

console.log(isEven(50))
// → true
console.log(isEven(75))
// → false
console.log(isEven(-1))
// → null
