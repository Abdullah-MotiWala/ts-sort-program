//  Sorting
export enum SortingOrder {
  Ascending = "ascending",
  Descending = "descending"
}

export interface SortingAlgorithm {
  sort(arr: number[], order: SortingOrder): number[];
}

export interface UserPrompts {
  inputFile: string;
  outputFile: string;
  order: SortingOrder;
  delimiter: string;
}

export const USER_QUESTIONS = [
  {
    type: 'text',
    name: 'inputFile',
    initial: "input.txt",
    message: "Enter Input file name",
  }, {
    type: 'text',
    name: 'outputFile',
    initial: "output.txt",
    message: "Enter Output file name",
  },
  {
    type: 'select',
    name: 'order',
    initial: 1,
    message: "choose sorting order",
    choices: [
      { title: 'Ascending', value: SortingOrder.Ascending },
      { title: 'Descending', value: SortingOrder.Descending },
    ]
  },
  {
    type: 'text',
    name: 'delimiter',
    initial: ", ",
    message: "Enter the delimator of list",
  },
]

export const FILE_LOCATION = "../"