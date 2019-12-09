class Group {
  constructor (data) {
    this.data = data
  }

  static from (arr) {
    return new Set(arr)
  }
}

const group = Group.from([10, 20])
console.log(group.has(10))
// → true
console.log(group.has(30))
// → false
group.add(10)
group.delete(10)
console.log(group.has(10))
// → false
for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value)
}
