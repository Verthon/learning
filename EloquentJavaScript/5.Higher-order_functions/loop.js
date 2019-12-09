const loop = (times, test, update, body) => {
  if (test(times)) {
    body(times)
    return loop(update(times), test, update, body)
  }
}
loop(
  3,
  n => n > 0,
  n => n - 1,
  console.log
)
// → 3
// → 2
// → 1
