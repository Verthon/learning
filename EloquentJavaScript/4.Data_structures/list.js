const arrayToList = arr => {
  if (arr.length === null) {
    return null
  }

  return {
    value: arr.shift(),
    rest: arrayToList(arr)
  }
}

console.log(arrayToList([10, 20]))
