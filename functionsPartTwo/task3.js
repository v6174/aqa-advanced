//function,
function divide(numerator, denominator) {

    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Invalid values. Both of symbols have to be numbers!");
    }

    if (denominator === 0) {
        throw new Error("Unable to divide by '0'");
    }
return numerator / denominator;
}

//Succesful division
console.log("\n1.Sucessfull division");
try {
    const result = divide(10, 2);
    console.log("Result: ", result);
} catch (error) {
    console.error("Error occured: ", error.message);
} finally {
    console.log("Task is accomplished!");
}

// Denominator divided by 0
console.log("\n2.Denominator / by'0' ");
try {
    const result = divide(10, 0);
    console.log("Result: ", result);
} catch (error) {
    console.error("Error occured: ", error.message);
}finally {
    console.log("Task is accomplished!");
}

// Division with a not a number agrument (numerator)
console.log("\n3.Numerator NaN");
try {
    const result = divide("five", 2); 
    console.log("Result: ", result);
} catch (error) {
    console.error("Error occured: ", error.message);
}finally {
    console.log("Task is accomplished!");
}

// Division with a not a number agrument (denominator)
console.log("\n4.Denominator NaN");
try {
    const result = divide(2, "six"); 
    console.log("Result: ", result);
} catch (error) {
    console.error("Error occured: ", error.message);
}finally {
    console.log("Task is accomplished!\n");
}