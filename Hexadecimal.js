// Hexadecimal
// Writes a function that convert a hexadecimal color, "blue"
// for example "#0000FF" in its RGB representation rgb(0,0,255)".
// Give the function the name getRGB() and test it with this code

/** function isVowel(char) {
	if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
			return true;}
		else {
			return false;}
		}

getRGB() **/


function hexadecimal(color) {
var splitColor = color.split('')
console.log(splitColor)


// join all elemens of an array n one string
//join()

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

console.log(unitedR)
console.log(unitedG)
console.log(unitedB)

console.log(forR)
console.log(forG)
console.log(forB)

console.log('this is the red color ' + r)
console.log('this is the gree color ' + g)
console.log('this is the blue color ' +b)

var rgbColor = [r, g,b]
console.log('The color Hexadecimal ' + color + ' converted to RGB is ' + rgbColor)
}

hexadecimal("#0000FF")








