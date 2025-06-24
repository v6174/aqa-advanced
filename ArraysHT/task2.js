
// Creating the array with # values
const numbers = [1, 2, 3, 4, 5, 6, 7];
// Creating new array with a multiplication feature
const multipliedNumbers = numbers.map((value, index) => value * index); 
// Input via the table form
console.table(multipliedNumbers);
