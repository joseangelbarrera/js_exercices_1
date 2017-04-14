// Hexadecimal enhanced
// Improves the previous function so besides
// the conversion also identifies some basic colors:

/* Black: #000000
White: #FFFFFF
Red: #FF0000
Green: #00FF00
Blue: #0000FF

So the result can be (for these cases):

>>> var a = getRGB ('#00FF00');
>>> a;
“rgb(0,255,0)   verde”; */

var hexadecimal = function (color) {
  var color = color
  var splitColor = color.split('')

// join all elemens of an array n one string
// join()

// selects some elements of an array and return a new array

  var forR = splitColor.slice(1, 3)
  var forG = splitColor.slice(3, 5)
  var forB = splitColor.slice(5, 7)

  var unitedR = forR.join('')
  var unitedG = forG.join('')
  var unitedB = forB.join('')

  var r = parseInt(unitedR, 16)
  var g = parseInt(unitedG, 16)
  var b = parseInt(unitedB, 16)

  console.log('r is a ' + typeof r + ' and his value is ' + r)
  console.log('g is a ' + typeof g + ' and his value is ' + g)
  console.log('b is a ' + typeof b + ' and his value is ' + b)

// In this example I try to compere the r, g, b numbers with the RGB values.
// But it does not work properly.

  var typeOfColor = function (r, g, b) {
    if (r === 0 && g === 0 && b === 0) {
      return 'black.'
    } else if (r === 0 && g === 255 && b === 0) {
      return 'green.'
    } else if (r === 0 && g === 0 && b === 255) {
      return 'blue.'
    } else if (r === 255 && g === 0 && b === 0) {
      return 'red.'
    } else if (r === 255 && g === 255 && b == 255) {
      return 'white.'
    } else {
      return 'nice.'
    }
  }

// In this hidden example I tried to compere the hexadecimal
// numbers with the value of the color intorduced by user as color.
// But again, it does not work.

/*  var typeOfColor = function (color) {
    if (color === '#00000') {
      return 'black.'
    } else if (color === '#0000FF') {
      return 'green.'
    } else if (color === '#00FF00') {
      return 'blue.'
    } else if (color === '#FF0000') {
      return 'red.'
    } else if (color === '#FFFFFF') {
      return 'white.'
    } else {
      return 'nice.'
    }
  }
*/
  var rgbColor = [r, g, b]

  console.log('The color Hexadecimal ' + color + ' converted to RGB is (' + rgbColor + ') and it is mostly ' + typeOfColor())
}
hexadecimal('#0000FF')

// Result of this tet is:
/*
r is a number and his value is 0
g is a number and his value is 0
b is a number and his value is 255
The color Hexadecimal #0000FF converted to RGB is (0,0,255) and it is mostly nice.
*/
// But the real color is 'green' instead of 'nice'
