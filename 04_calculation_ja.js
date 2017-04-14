// Multiplications table on demand
// Write a program that writes in the
// console all the multiples of 23 less than 500 and
// at the end writes the sum of all of them

function calculation () {
  var result = ''
  var sum = 0
  for (var j = 1; j < 500; j++) {
    if ((j % 23) === 0) {
      result += j + ' , '
      sum += j
    }
  }
  console.log('The solution is:\n' + result + '\nand the sum of all this numbers is\n' + sum)
}
calculation()
