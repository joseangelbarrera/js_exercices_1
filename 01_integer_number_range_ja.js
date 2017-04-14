// Integer Numbers Range

// Write a function in Javascript that having two integers x1 and x2
// returns all the integers between them.
// If x2 es lower than x1 it should return -1

function integerNumbersRange (x, y) {
  var solution = 'This is the solution: - '
  if (y < x) {
    return -1
  } else {
    for (var i = x + 1; i < y; i++) {
      solution += i + ' - '
    }
    console.log(solution)
  }
}
integerNumbersRange(11, 22)
