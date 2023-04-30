import { SortingOrder } from "../types";

abstract class SortingAlgorithm {
  abstract sort(arr: number[], order: SortingOrder): number[];
  compare(a: number, b: number, order: string) {
    return order === SortingOrder.Ascending ? a - b : b - a;
  }
}

export class BubbleSort extends SortingAlgorithm {
  sort(arr: number[], order: SortingOrder): number[] {
    for (let i = 0; i < arr.length; i++) {
      let swapped = false;
      for (let j = i + 1; j < arr.length; j++) {
        if (this.compare(arr[i], arr[j], order) > 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          swapped = true;
        }
      }
      // swapped is false means no sorting done and array is sorted now
      if (!swapped) {
        break;
      }
    }
    return arr;
  }
}

export class SelectionSort extends SortingAlgorithm {
  sort(arr: number[], order: SortingOrder): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
      let maxValueIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (this.compare(arr[i], arr[j], order) > 0) {
          maxValueIndex = j;
        }
      }
      // The swap operation should only be performed if maxIndex is not equal to i, which means that a new maximum value has been found.
      if (maxValueIndex !== i) {
        [arr[maxValueIndex], arr[i]] = [arr[i], arr[maxValueIndex]];
      }
    }
    return arr;
  }
}


