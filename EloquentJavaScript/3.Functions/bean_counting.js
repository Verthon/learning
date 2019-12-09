const countBs = input => {
  let result = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'B') {
      result += 1
    }
  }
  return result
}

const countChar = (input, letter) => {
  let result = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === letter) {
      result += 1
    }
  }
  return result
}

console.log(countBs('BBC'))
// → 2
console.log(countChar('kakkerlak', 'k'))
// → 4
