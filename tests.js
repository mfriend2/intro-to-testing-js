// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//plusOne

describe('plusOne', function () {
    it('should be defined a function', function () {
        expect(typeof plusOne).toBe("function");
    });
    it('should return a number', function () {
        expect(typeof plusOne()).toBe("number");
    });
    it('should return 5 when passed 4', function () {
        expect(plusOne(4)).toBe(5);
    });
    it('should return 0 when passed anything other than a number', function () {
        expect(plusOne(true)).toBe(0);
    });
    it('should return 6 when passed 5', function () {
        expect(plusOne(5)).toBe(6);
    });
})

describe('sayHello',function () {
    it('should be defined a function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when the argument is undefined', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    })
    it('should return "Hello, World!" when passed false', function () {
    expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when the argument is null', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return "Hello, Blank!" when passed "" as an argument', function () {
        expect(sayHello("")).toBe("Hello, Blank!");
    });
    it('should return "Hello, World!" when passed 2.3 as an argument', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed "5" as an argument', function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it('should return "Hello, World!" for any data types other than a string passed as an argument', function () {
        expect(sayHello([])).toBe("Hello, World!")
    })
})

describe('isFive', function () {
    it('should be defined a function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean for the entered value', function () {
        expect(isFive("Mike")).toBe(false);
    });
    it('should return true when passed the value 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed the string "5"', function () {
        expect(isFive("5")).toBe(false);
    });
})

describe('isEven', function () {
    it('should be defined a function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a value no matter the input', function () {
        expect(isEven("Mike")).toBe(false);
    });
    it('should return true when passed the value 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the value -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the value 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed the string "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed the string "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed the number Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
})

describe('isVowel', function () {
    it('should be defined as a function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return a boolean', function () {
        expect(isVowel()).toBe(false);
    });
    it('should return true when passed "a" ', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed a boolean', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed ""', function () {
        expect(isVowel("")).toBe(false);
    });
    it('should return false when passed without a parameter', function () {
        expect(isVowel()).toBe(false);
    });
})

// add

describe('add', function () {
    it('should be defined as a function', function () {
        expect(typeof add).toBe("function");
    });
    it('should take it two arguments and add them together', function () {
        expect(add(1,1)).toBe(2);
    });
    it('should return 5 when passed 2 & 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed -3 & -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed 5 & 6', function () {
        expect(add(5,6)).toBe(11);
    });
    it('should return 6 when passed -4 & 10', function () {
        expect(add(-4,10)).toBe(6);
    });
    it('should return NaN when passed "banana" & "split"', function () {
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN when passed 2 & "apples"', function () {
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN when passed without an argument', function () {
        expect(add()).toBeNaN();
    });
})