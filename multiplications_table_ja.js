// Multiplications table
// Write a function that writes in the console the multiplication table (from 1 to 10)

function multiplicationsTable() {
	result = "THIS IS THE MULTIPLICATION TABLE OF 1\n\n"
		for (var i=1; i<=10; i++) {
			for (var j=1; j<=10; j++) {
				result += ( i +  " * " + j + " = " + (i*j) + "\t||\t");
					}
			result += "\n\nETHIS IS THE MULTIPLICATION TABLE OF " +  (i+1) + ":\n\n";
								}	
			console.log(result)
					}
multiplicationsTable()


// My bigger problem is the last line of result: 'THIS IS THE MULTIPLICATION TABLE OF 11'. I do not know how to eliminate it"



