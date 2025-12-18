package com.example;

/**
 * Utility class for string operations
 */
public class StringUtils {

    /**
     * Reverses a string
     * @param input the string to reverse
     * @return reversed string
     */
    public String reverse(String input) {
        if (input == null) {
            return null;
        }
        return new StringBuilder(input).reverse().toString();
    }

    /**
     * Checks if a string is palindrome
     * @param input the string to check
     * @return true if palindrome, false otherwise
     */
    public boolean isPalindrome(String input) {
        if (input == null) {
            return false;
        }
        String cleaned = input.replaceAll("\\s+", "").toLowerCase();
        return cleaned.equals(reverse(cleaned));
    }

    /**
     * Counts vowels in a string
     * @param input the string to analyze
     * @return number of vowels
     */
    public int countVowels(String input) {
        if (input == null) {
            return 0;
        }
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (char c : input.toCharArray()) {
            if (vowels.indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }
}
