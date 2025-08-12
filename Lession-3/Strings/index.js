// 3a. Create the text ‘My name is:’ as a string.

let text1 = 'My name is:'

// 3b. Create your name as a string (for example: ‘Simon’).

let name = "Shanedra Singh"

// 3c. Using concatenation, add the 2 strings from 3a and 3b together to create the text: ‘My name is: __’ (replace __ with your name).

let message = text1+ " " + name;
console.log(message)

// 3d. At a restaurant, you order 1 coffee ($5) and 1 bagel ($3). Using math, 
// calculate the total cost, and using concatenation, 
// create the text: ‘Total cost: $__’ (replace __ with the total you calculated).

let coffee = 5
let bagel = 3
let total = coffee + bagel
let totalMessage = ("Total cost: $" + total)
console.log(totalMessage)
// 3e. Do the same thing as 3d, but use a template string and interpolation.


// 3f. Display the text from 3e in a popup using alert(...);
alert(totalMessage)

