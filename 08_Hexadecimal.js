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

function hexadecimal (color) {
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

  console.log(r)
  console.log(g)
  console.log(b)

  var rgbColor = [r, g, b]
  console.log('The color Hexadecimal ' + color + ' converted to RGB is ' + rgbColor)
}

hexadecimal('#0000FF')
