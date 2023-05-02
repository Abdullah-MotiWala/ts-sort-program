// main.ts

import { SortingAlgorithm, SortingAlgos, SortingOrder } from "../constants";
import { QuickSort, MergeSort, HeapSort } from "./sortingAlgos";

export class SortedNumberList {
  // initial variables
  private readonly sortingAlgorithm: SortingAlgorithm;
  private readonly sortingOrder: SortingOrder;
  numbers: number[];
  SortingAlgorithName: string

  constructor(
    numbers: number[],
    sortingAlgorithmStr: string,
    sortingOrderStr: SortingOrder
  ) {
    this.numbers = numbers;
    // saving sorting name to show in test case
    this.SortingAlgorithName = sortingAlgorithmStr
    // updating sorting order wrt user's requirment
    this.sortingOrder = sortingOrderStr

    // selecting sorting algo as per user
    switch (sortingAlgorithmStr) {
      case SortingAlgos.HeapSort:
        this.sortingAlgorithm = new HeapSort();
        break;
      case SortingAlgos.MergeSort:
        this.sortingAlgorithm = new MergeSort();
        break;
      default:
        this.sortingAlgorithm = new QuickSort();
        break;
    }
  }

  // sorting method, will take list and order and return sorted array
  sort(): number[] {
    const startTime = performance.now();
    const sortedNumbers = this.sortingAlgorithm.sort(
      this.numbers,
      this.sortingOrder
    );
    const endTime = performance.now();
    console.log(`Sorted ${this.numbers.length} elements in ${(endTime - startTime).toFixed(3)} milliseconds using ${this.SortingAlgorithName}.`);
    return sortedNumbers;
  }
}
