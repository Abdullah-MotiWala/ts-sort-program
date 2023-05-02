import { SortingOrder } from "../constants";

abstract class SortingAlgorithm {
  abstract sort(arr: number[], order: SortingOrder): number[];
  compare(a: number, b: number, order: SortingOrder): number {
    if (isNaN(a)) {
      return -1;
    }
    if (isNaN(b)) {
      return 1;
    }
    if (a === b) {
      return 0;
    } else if (order === SortingOrder.Ascending) {
      return a < b ? -1 : 1;
    } else {
      return a > b ? -1 : 1;
    }
  }
  

}

export class MergeSort extends SortingAlgorithm {
  sort(arr: number[], order: SortingOrder): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return this.merge(this.sort(leftArr, order), this.sort(rightArr, order), order);
  }

  private merge(leftArr: number[], rightArr: number[], order: SortingOrder): number[] {
    const sortedArr: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (this.compare(leftArr[leftIndex], rightArr[rightIndex], order) < 0) {
        sortedArr.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        sortedArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }

    return sortedArr.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
  }
}

export class HeapSort extends SortingAlgorithm {
  sort(arr: number[], order: SortingOrder): number[] {
    this.buildHeap(arr, order);

    for (let i = arr.length - 1; i >= 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      this.heapify(arr, 0, i, order);
    }

    return arr;
  }

  private buildHeap(arr: number[], order: SortingOrder): void {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(arr, i, n, order);
    }
  }

  private heapify(arr: number[], index: number, heapSize: number, order: SortingOrder): void {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largestIndex = index;

    if (leftChildIndex < heapSize && this.compare(arr[leftChildIndex], arr[largestIndex], order) > 0) {
      largestIndex = leftChildIndex;
    }

    if (rightChildIndex < heapSize && this.compare(arr[rightChildIndex], arr[largestIndex], order) > 0) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      [arr[largestIndex], arr[index]] = [arr[index], arr[largestIndex]];
      this.heapify(arr, largestIndex, heapSize, order);
    }
  }
}
export class QuickSort extends SortingAlgorithm {
  sort(arr: number[], order: SortingOrder): number[] {
    this.quickSort(arr, 0, arr.length - 1, order);
    return arr;
  }

  private quickSort(arr: number[], left: number, right: number, order: SortingOrder): void {
    if (left >= right) {
      return;
    }

    const pivotIndex = this.partition(arr, left, right, order);
    this.quickSort(arr, left, pivotIndex - 1, order);
    this.quickSort(arr, pivotIndex + 1, right, order);
  }

  private partition(arr: number[], left: number, right: number, order: SortingOrder): number {
    const pivotIndex = Math.floor((left + right) / 2);
    const pivotValue = arr[pivotIndex];

    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;

    for (let i = left; i < right; i++) {
      if (this.compare(arr[i], pivotValue, order) < 0) {
        [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
        storeIndex++;
      }
    }

    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
    return storeIndex;
  }
}
