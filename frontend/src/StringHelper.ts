/**
 * Helper class for string operations
 */
export class StringHelper {
    /**
     * Reverses a string
     */
    reverse(str: string): string {
        return str.split('').reverse().join('');
    }

    /**
     * Checks if a string is a palindrome
     */
    isPalindrome(str: string): boolean {
        const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleaned === this.reverse(cleaned);
    }

    /**
     * Counts the number of vowels in a string
     */
    countVowels(str: string): number {
        const matches = str.match(/[aeiou]/gi);
        return matches ? matches.length : 0;
    }

    /**
     * Capitalizes the first letter of each word
     */
    capitalize(str: string): string {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    /**
     * Truncates a string to a specified length
     */
    truncate(str: string, maxLength: number): string {
        if (str.length <= maxLength) {
            return str;
        }
        return str.substring(0, maxLength) + '...';
    }
}
