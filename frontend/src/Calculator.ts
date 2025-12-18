/**
 * A simple calculator class for TypeScript
 */
export class Calculator {
    /**
     * Adds two numbers
     */
    add(a: number, b: number): number {
        return a + b;
    }

    /**
     * Subtracts b from a
     */
    subtract(a: number, b: number): number {
        return a - b;
    }

    /**
     * Multiplies two numbers
     */
    multiply(a: number, b: number): number {
        return a * b;
    }

    /**
     * Divides a by b
     */
    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }

    /**
     * Checks if a number is even
     */
    isEven(num: number): boolean {
        return num % 2 === 0;
    }

    /**
     * Calculates the factorial of a number
     */
    factorial(n: number): number {
        if (n < 0) {
            throw new Error('Factorial is not defined for negative numbers');
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }
}
