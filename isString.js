// is String

// Define a function called ​isString​ that receives a value
// and return true if the value received is a string

function isString(value) {
		var valueOf = typeof(value)
		if (valueOf === 'string') {return true} else {return false}
}

isString('casa')


