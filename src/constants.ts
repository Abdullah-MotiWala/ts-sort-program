//  Sorting
export enum SortingOrder {
  Ascending = "ascending",
  Descending = "descending"
}

export interface SortingAlgorithm {
  sort(arr: number[], order: SortingOrder): number[];
}

