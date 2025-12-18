package com.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("StringUtils Tests")
class StringUtilsTest {

    private StringUtils stringUtils;

    @BeforeEach
    void setUp() {
        stringUtils = new StringUtils();
    }

    @Test
    @DisplayName("Test reverse with normal string")
    void testReverse() {
        assertEquals("olleh", stringUtils.reverse("hello"));
        assertEquals("12345", stringUtils.reverse("54321"));
    }

    @Test
    @DisplayName("Test reverse with empty string")
    void testReverseEmptyString() {
        assertEquals("", stringUtils.reverse(""));
    }

    @Test
    @DisplayName("Test reverse with null")
    void testReverseNull() {
        assertNull(stringUtils.reverse(null));
    }

    @Test
    @DisplayName("Test isPalindrome with valid palindromes")
    void testIsPalindromeValid() {
        assertTrue(stringUtils.isPalindrome("racecar"));
        assertTrue(stringUtils.isPalindrome("A man a plan a canal Panama"));
        assertTrue(stringUtils.isPalindrome("madam"));
    }

    @Test
    @DisplayName("Test isPalindrome with non-palindromes")
    void testIsPalindromeInvalid() {
        assertFalse(stringUtils.isPalindrome("hello"));
        assertFalse(stringUtils.isPalindrome("world"));
    }

    @Test
    @DisplayName("Test isPalindrome with null")
    void testIsPalindromeNull() {
        assertFalse(stringUtils.isPalindrome(null));
    }

    @Test
    @DisplayName("Test countVowels")
    void testCountVowels() {
        assertEquals(2, stringUtils.countVowels("hello"));
        assertEquals(5, stringUtils.countVowels("beautiful")); // b-e-a-u-t-i-f-u-l has 5 vowels: e,a,u,i,u
        assertEquals(0, stringUtils.countVowels("xyz"));
    }

    @Test
    @DisplayName("Test countVowels with empty string")
    void testCountVowelsEmpty() {
        assertEquals(0, stringUtils.countVowels(""));
    }

    @Test
    @DisplayName("Test countVowels with null")
    void testCountVowelsNull() {
        assertEquals(0, stringUtils.countVowels(null));
    }
}
