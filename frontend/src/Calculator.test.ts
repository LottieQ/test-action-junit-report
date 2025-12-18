import { Calculator } from './Calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        test('should add two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
            expect(calculator.add(10, 20)).toBe(30);
        });

        test('should add negative numbers', () => {
            expect(calculator.add(-5, -3)).toBe(-8);
            expect(calculator.add(-10, 5)).toBe(-5);
        });

        test('should handle zero', () => {
            expect(calculator.add(0, 0)).toBe(0);
            expect(calculator.add(5, 0)).toBe(5);
        });
    });

    describe('subtract', () => {
        test('should subtract two numbers', () => {
            expect(calculator.subtract(10, 5)).toBe(5);
            expect(calculator.subtract(20, 8)).toBe(12);
        });

        test('should handle negative results', () => {
            expect(calculator.subtract(5, 10)).toBe(-5);
        });
    });

    describe('multiply', () => {
        test('should multiply two numbers', () => {
            expect(calculator.multiply(3, 4)).toBe(12);
            expect(calculator.multiply(7, 8)).toBe(56);
        });

        test('should handle zero', () => {
            expect(calculator.multiply(5, 0)).toBe(0);
            expect(calculator.multiply(0, 10)).toBe(0);
        });

        test('should handle negative numbers', () => {
            expect(calculator.multiply(-3, 4)).toBe(-12);
            expect(calculator.multiply(-3, -4)).toBe(12);
        });
    });

    describe('divide', () => {
        test('should divide two numbers', () => {
            expect(calculator.divide(10, 2)).toBe(5);
            expect(calculator.divide(15, 3)).toBe(5);
        });

        test('should handle decimal results', () => {
            expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
        });

        test('should throw error when dividing by zero', () => {
            expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
        });
    });

    describe('isEven', () => {
        test('should return true for even numbers', () => {
            expect(calculator.isEven(2)).toBe(true);
            expect(calculator.isEven(100)).toBe(true);
            expect(calculator.isEven(0)).toBe(true);
        });

        test('should return false for odd numbers', () => {
            expect(calculator.isEven(1)).toBe(false);
            expect(calculator.isEven(99)).toBe(false);
            expect(calculator.isEven(-3)).toBe(false);
        });
    });

    describe('factorial', () => {
        test('should calculate factorial of positive numbers', () => {
            expect(calculator.factorial(0)).toBe(1);
            expect(calculator.factorial(1)).toBe(1);
            expect(calculator.factorial(5)).toBe(120);
            expect(calculator.factorial(7)).toBe(5040);
        });

        test('should throw error for negative numbers', () => {
            expect(() => calculator.factorial(-1)).toThrow('Factorial is not defined for negative numbers');
        });
    });
});
