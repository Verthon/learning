const fizzBuzz = limit => {
  for (let i = 1; i <= limit; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(i, 'FizzBuzz')
    } else if (i % 3 === 0) {
      console.log(i, 'Fizz')
    } else if (i % 5 === 0) {
      console.log(i, 'Buzz')
    }
  }
}

fizzBuzz(15)

const fizzBuzz = (limit) => {
  let current = 1;
  if(current <= limit){
   const fizzBuzzRecursive = (index) => {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(i, 'FizzBuzz')
    } else if (i % 3 === 0) {
      console.log(i, 'Fizz')
    } else if (i % 5 === 0) {
      console.log(i, 'Buzz')
    }
      return fizzBuzzRecursive(current++)
    }
  }
   else {
    return false 
  } 
}

console.log(fizzBuzz(15))