// Creating the array with # values
const numbers = [6, -2, 0, 43, -3, 8, 9, -8]; 

// Declaring variables
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// Loop intefration
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}

//results
console.log("Кількість позитивних чисел: ", positiveCount);
console.log("Кількість негативних чисел: ", negativeCount);
console.log("Кількість нульових чисел: ", zeroCount);

