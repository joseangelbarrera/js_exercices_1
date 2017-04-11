// Multiplications table on demand
// Write a function that writes in the console
// the multiplication table (in one column) of any number
// passed as parameter

function multiplicationsTableOnDemand(a) {
			for (var j=1; j<=10; j++) {
				res = ('Multiply ' + a + ' * ' + j + ' is: ' + a*j);
				console.log (res)
							}		
			console.log ('\n')
}

multiplicationsTableOnDemand(23)






