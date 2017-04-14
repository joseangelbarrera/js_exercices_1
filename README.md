# Javascript Exercises Challenge 1

### 1. Integer Numbers Range

Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1

***solution***

```function integerNumbersRange (x, y) {
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
```


### 2. Multiplications table

Write a function that writes in the console the multiplication table (from 1 to 10)

***solution***

```function multiplicationsTable() {
  result = "THIS IS THE MULTIPLICATION TABLE OF 1\n\n"
 for (var i=1; i<=10; i++) {
      for (var j=1; j<=10; j++) {
        result += ( i +  " * " + j + " = " + (i*j) + "\t||\t");
    } result += "\n\nETHIS IS THE MULTIPLICATION TABLE OF " +  (i+1) + ":\n\n";
  } 
  console.log(result)
  }
multiplicationsTable()

// My bigger problem is the last line of result: 'THIS IS THE MULTIPLICATION TABLE OF 11'. I do not know how to eliminate it"
  
```



### 3. Multiplications table on demand

Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

***solution***

```function multiplicationsTableOnDemand (a) {
  for (var j = 1; j <= 10; j++) {
    var res = ('Multiply ' + a + ' * ' + j + ' is: ' + a * j)
    console.log(res)
  }
  console.log('\n')
}

multiplicationsTableOnDemand(903)

```


### 4. Calculation

Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

```Elements : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313
```

***solution***

```function calculation () {
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
```


### 5. max() function

Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

***solution***

   ```function max (a, b) {
  var result = Math.max(a, b)
  console.log('El resultado de todos los elementos es => ' + result + '.')
}
max(40, 234)

   ```


### 6. maxOfThree() function

Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

***solution***

```function maxOfThree (a, b, c) {
  var result = Math.max(a, b)
  var resultReal = Math.max(c, result)
  console.log('The bigger number between ' + a + ', ' + b + ' and ' + c + ' is => ' + resultReal + '.')
}
maxOfThree(1035, 24, 237)
```


### 7. isVowel() function

Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

***solution***

```function isVowel (char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true
  } else {
    return false
  }
}
console.log(isVowel('verde'))
```


### 8. Hexadecimal

Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

```>>> var a = getRGB ('#00FF00');
>>> a;
“rgb(0,255,0)”;
```

***solution***

```function hexadecimal (color) {
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
```


### 9. Hexadecimal enhanced

Improves the previous function so besides the conversion also identifies some basic colors:

Black: #000000
White: #FFFFFF
Red: #FF0000
Green: #00FF00
Blue: #0000FF
So the result can be (for these cases):

```>>> var a = getRGB ('#00FF00'); 
>>> a;
“rgb(0,255,0)   verde”;
```

***solution***

```
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

```
