package com.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Calculator Tests")
class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }

    @Test
    @DisplayName("Test addition of positive numbers")
    void testAddPositiveNumbers() {
        assertEquals(5, calculator.add(2, 3));
        assertEquals(10, calculator.add(7, 3));
    }

    @Test
    @DisplayName("Test addition of negative numbers")
    void testAddNegativeNumbers() {
        assertEquals(-5, calculator.add(-2, -3));
        assertEquals(0, calculator.add(-5, 5));
    }

    @Test
    @DisplayName("Test subtraction")
    void testSubtract() {
        assertEquals(5, calculator.subtract(10, 5));
        assertEquals(-5, calculator.subtract(5, 10));
    }

    @Test
    @DisplayName("Test multiplication")
    void testMultiply() {
        assertEquals(6, calculator.multiply(2, 3));
        assertEquals(0, calculator.multiply(5, 0));
        assertEquals(-15, calculator.multiply(3, -5));
    }

    @Test
    @DisplayName("Test division")
    void testDivide() {
        assertEquals(2.0, calculator.divide(10, 5), 0.001);
        assertEquals(2.5, calculator.divide(5, 2), 0.001);
    }

    @Test
    @DisplayName("Test division by zero throws exception")
    void testDivideByZero() {
        assertThrows(ArithmeticException.class, () -> calculator.divide(10, 0));
    }

    @Test
    @DisplayName("Test isEven for even numbers")
    void testIsEvenWithEvenNumbers() {
        assertTrue(calculator.isEven(2));
        assertTrue(calculator.isEven(0));
        assertTrue(calculator.isEven(-4));
    }

    @Test
    @DisplayName("Test isEven for odd numbers")
    void testIsEvenWithOddNumbers() {
        assertFalse(calculator.isEven(3));
        assertFalse(calculator.isEven(-5));
    }
}
