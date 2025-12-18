/**
 * Utility functions for array operations
 */
export class ArrayUtils {
    /**
     * Finds the maximum value in an array
     */
    max(arr: number[]): number {
        if (arr.length === 0) {
            throw new Error('Array is empty');
        }
        return Math.max(...arr);
    }

    /**
     * Finds the minimum value in an array
     */
    min(arr: number[]): number {
        if (arr.length === 0) {
            throw new Error('Array is empty');
        }
        return Math.min(...arr);
    }

    /**
     * Calculates the average of an array
     */
    average(arr: number[]): number {
        if (arr.length === 0) {
            throw new Error('Array is empty');
        }
        const sum = arr.reduce((acc, val) => acc + val, 0);
        return sum / arr.length;
    }

    /**
     * Removes duplicates from an array
     */
    unique<T>(arr: T[]): T[] {
        return [...new Set(arr)];
    }

    /**
     * Chunks an array into smaller arrays of specified size
     */
    chunk<T>(arr: T[], size: number): T[][] {
        if (size <= 0) {
            throw new Error('Chunk size must be positive');
        }
        const result: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }
}
