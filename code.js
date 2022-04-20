// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// plusOne

function plusOne(num) {
    if (typeof num === "number") {
        return num + 1;
    }
    return 0;
}

//sayHello

function sayHello(input){
    if (typeof input !== "string")  {
        return "Hello, World!";
    } else if (input === "") {
        return "Hello, Blank!";
    } else if (!isNaN(input)) {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}

// isFive

function isFive(input) {
    return input === 5;
}

// isEven

function isEven(input) {
    return input % 2 === 0;
}