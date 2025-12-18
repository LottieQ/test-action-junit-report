import { ArrayUtils } from './ArrayUtils';

describe('ArrayUtils', () => {
    let utils: ArrayUtils;

    beforeEach(() => {
        utils = new ArrayUtils();
    });

    describe('max', () => {
        test('should find maximum value', () => {
            expect(utils.max([1, 5, 3, 9, 2])).toBe(9);
            expect(utils.max([10, 20, 15])).toBe(20);
        });

        test('should handle negative numbers', () => {
            expect(utils.max([-5, -1, -10])).toBe(-1);
        });

        test('should throw error for empty array', () => {
            expect(() => utils.max([])).toThrow('Array is empty');
        });
    });

    describe('min', () => {
        test('should find minimum value', () => {
            expect(utils.min([1, 5, 3, 9, 2])).toBe(1);
            expect(utils.min([10, 20, 15])).toBe(10);
        });

        test('should handle negative numbers', () => {
            expect(utils.min([-5, -1, -10])).toBe(-10);
        });

        test('should throw error for empty array', () => {
            expect(() => utils.min([])).toThrow('Array is empty');
        });
    });

    describe('average', () => {
        test('should calculate average', () => {
            expect(utils.average([1, 2, 3, 4, 5])).toBe(3);
            expect(utils.average([10, 20, 30])).toBe(20);
        });

        test('should handle decimal results', () => {
            expect(utils.average([1, 2, 3])).toBeCloseTo(2, 1);
        });

        test('should throw error for empty array', () => {
            expect(() => utils.average([])).toThrow('Array is empty');
        });
    });

    describe('unique', () => {
        test('should remove duplicates', () => {
            expect(utils.unique([1, 2, 2, 3, 3, 3, 4])).toEqual([1, 2, 3, 4]);
            expect(utils.unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
        });

        test('should handle array with no duplicates', () => {
            expect(utils.unique([1, 2, 3])).toEqual([1, 2, 3]);
        });

        test('should handle empty array', () => {
            expect(utils.unique([])).toEqual([]);
        });
    });

    describe('chunk', () => {
        test('should chunk array into smaller arrays', () => {
            expect(utils.chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
            expect(utils.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
        });

        test('should handle chunk size larger than array', () => {
            expect(utils.chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
        });

        test('should handle chunk size of 1', () => {
            expect(utils.chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
        });

        test('should throw error for invalid chunk size', () => {
            expect(() => utils.chunk([1, 2, 3], 0)).toThrow('Chunk size must be positive');
            expect(() => utils.chunk([1, 2, 3], -1)).toThrow('Chunk size must be positive');
        });
    });
});
