package com.example;

/**
 * A simple calculator class for testing purposes
 */
public class Calculator {

    /**
     * Adds two integers
     * @param a first number
     * @param b second number
     * @return sum of a and b
     */
    public int add(int a, int b) {
        return a + b;
    }

    /**
     * Subtracts b from a
     * @param a first number
     * @param b second number
     * @return difference of a and b
     */
    public int subtract(int a, int b) {
        return a - b;
    }

    /**
     * Multiplies two integers
     * @param a first number
     * @param b second number
     * @return product of a and b
     */
    public int multiply(int a, int b) {
        return a * b;
    }

    /**
     * Divides a by b
     * @param a dividend
     * @param b divisor
     * @return quotient of a and b
     * @throws ArithmeticException if b is zero
     */
    public double divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed");
        }
        return (double) a / b;
    }

    /**
     * Checks if a number is even
     * @param number the number to check
     * @return true if even, false otherwise
     */
    public boolean isEven(int number) {
        return number % 2 == 0;
    }
}
