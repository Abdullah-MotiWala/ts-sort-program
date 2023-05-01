// main.ts

import { SortingAlgorithm, SortingOrder } from "../constants";
import { BubbleSort, SelectionSort } from "./sortingAlgos";
// import { QuickSort } from "./sortingAlgos";

export class SortedNumberList {
  // initial variables
  private readonly sortingAlgorithm: SortingAlgorithm;
  private readonly sortingOrder: SortingOrder;
  numbers: number[];

  constructor(
    numbers: number[],
    sortingAlgorithmStr: string,
    sortingOrderStr: SortingOrder
  ) {
    this.numbers = numbers;
    // updating sorting order wrt user's requirment
    this.sortingOrder = sortingOrderStr

    // selecting sorting algo as per user
    switch (sortingAlgorithmStr) {
      case "selectionSort":
        this.sortingAlgorithm = new SelectionSort();
        break;
      default:
        this.sortingAlgorithm = new BubbleSort();
    }
  }

  // sorting method, will take list and order and return sorted array
  sort(): number[] {
    const sortedNumbers = this.sortingAlgorithm.sort(
      this.numbers,
      this.sortingOrder
    );
    return sortedNumbers;
  }
}
