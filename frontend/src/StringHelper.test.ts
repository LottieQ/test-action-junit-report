import { StringHelper } from './StringHelper';

describe('StringHelper', () => {
    let helper: StringHelper;

    beforeEach(() => {
        helper = new StringHelper();
    });

    describe('reverse', () => {
        test('should reverse a string', () => {
            expect(helper.reverse('hello')).toBe('olleh');
            expect(helper.reverse('world')).toBe('dlrow');
        });

        test('should handle empty string', () => {
            expect(helper.reverse('')).toBe('');
        });

        test('should handle single character', () => {
            expect(helper.reverse('a')).toBe('a');
        });
    });

    describe('isPalindrome', () => {
        test('should return true for palindromes', () => {
            expect(helper.isPalindrome('racecar')).toBe(true);
            expect(helper.isPalindrome('A man a plan a canal Panama')).toBe(true);
            expect(helper.isPalindrome('Was it a car or a cat I saw')).toBe(true);
        });

        test('should return false for non-palindromes', () => {
            expect(helper.isPalindrome('hello')).toBe(false);
            expect(helper.isPalindrome('world')).toBe(false);
        });

        test('should handle empty string', () => {
            expect(helper.isPalindrome('')).toBe(true);
        });
    });

    describe('countVowels', () => {
        test('should count vowels in a string', () => {
            expect(helper.countVowels('hello')).toBe(2);
            expect(helper.countVowels('beautiful')).toBe(5);
            expect(helper.countVowels('aeiou')).toBe(5);
        });

        test('should handle strings with no vowels', () => {
            expect(helper.countVowels('xyz')).toBe(0);
            expect(helper.countVowels('bcdfg')).toBe(0);
        });

        test('should be case insensitive', () => {
            expect(helper.countVowels('HELLO')).toBe(2);
            expect(helper.countVowels('AEIOUaeiou')).toBe(10);
        });
    });

    describe('capitalize', () => {
        test('should capitalize first letter of each word', () => {
            expect(helper.capitalize('hello world')).toBe('Hello World');
            expect(helper.capitalize('the quick brown fox')).toBe('The Quick Brown Fox');
        });

        test('should handle already capitalized strings', () => {
            expect(helper.capitalize('Hello World')).toBe('Hello World');
        });

        test('should handle single word', () => {
            expect(helper.capitalize('hello')).toBe('Hello');
        });
    });

    describe('truncate', () => {
        test('should truncate long strings', () => {
            expect(helper.truncate('hello world', 5)).toBe('hello...');
            expect(helper.truncate('the quick brown fox', 9)).toBe('the quick...');
        });

        test('should not truncate short strings', () => {
            expect(helper.truncate('hello', 10)).toBe('hello');
            expect(helper.truncate('test', 5)).toBe('test');
        });

        test('should handle exact length', () => {
            expect(helper.truncate('hello', 5)).toBe('hello');
        });
    });
});
