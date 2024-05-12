//Recursion is one of the function method that call the function itself

// now i explain how it works with this simple example
// we call the factorial function with value of arguments of 6..it goes into it and work with steps

// 5* factorial(4) = 120
// 4* factorial(3) = 24
// 3* factorial(2) = 6
// 2* factorial(1) = 2
// 1* factorial(0) = 1


function factorial(num) {
    if (num > 1) {
        return num * factorial(num - 1);
    }
    else {
        return 1;
    };
};

let input = 5;
let output = factorial(input);

console.log(`The factorial of ${input} is ${output}`);