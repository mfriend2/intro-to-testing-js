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

// isVowel

function isVowel(input) {
    if (typeof input !== "string") {
        return false;
    } else {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.includes(input.toLowerCase());
    }
}

// add

function add(a,b) {
    return parseFloat(a) + parseFloat(b);
}