// maxOfThree() function
// Define a function maxOfThree()
// that takes three numbers as arguments
// and returns the largest of the.

function maxOfThree (a, b, c) {
  var result = Math.max(a, b)
  var resultReal = Math.max(c, result)
  console.log('The bigger number between ' + a + ', ' + b + ' and ' + c + ' is => ' + resultReal + '.')
}
maxOfThree(1035, 24, 237)

// this function can be used
