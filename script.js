
//fibonachi
function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(21));

//fibonacci by hndiks

function fibonacci(num) {
    num = prompt("greq tiv");
    while (num === "" || isNaN(+num)) {
        num = prompt("secinq tiv brats");
    }
    if (num < 2) return alert(num);
    else {
        let firstNumber = 0,
            secondNumber = 1;
        for (let i = 2; i <= num; i++) {
            let thirdNumber = secondNumber + firstNumber;
            firstNumber = secondNumber;
            secondNumber = thirdNumber;
        }
        return alert(secondNumber);
    }
}

fibonacci(2);