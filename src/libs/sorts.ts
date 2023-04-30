// main.ts

import { SortingAlgorithm, SortingOrder } from "../types";
import { BubbleSort, SelectionSort } from "./sortingAlgos";
// import { QuickSort } from "./sortingAlgos";

export class SortedNumberList {
  private readonly sortingAlgorithm: SortingAlgorithm;
  private readonly sortingOrder: SortingOrder;
  numbers: number[];

  constructor(
    numbers: number[],
    sortingAlgorithmStr: string,
    sortingOrderStr: "ascending" | "descending"
  ) {
    this.numbers = numbers;
    this.sortingOrder =
      sortingOrderStr.toLowerCase() === "descending"
        ? SortingOrder.Descending
        : SortingOrder.Ascending;

    switch (sortingAlgorithmStr) {
      case "selectionSort":
        this.sortingAlgorithm = new SelectionSort();
        break;
      default:
        this.sortingAlgorithm = new BubbleSort();
    }
  }

  sort(): number[] {
    const sortedNumbers = this.sortingAlgorithm.sort(
      this.numbers,
      this.sortingOrder
    );
    return sortedNumbers;
  }
}
