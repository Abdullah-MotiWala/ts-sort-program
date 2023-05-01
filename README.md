# Typescript Test

## Objective:
Create a TypeScript program that reads a list of numbers from a file, sorts the numbers in descending order, and writes the sorted list of numbers to a new file. You should use Object-Oriented Programming principles and Data Structures in your code.

## Requirements:
- # The program should read a list of numbers from a file called "input.txt". 
- # The numbers in the file will be separated by a comma and a space (", ").
- # The program should sort the numbers in descending order.
- # The program should write the sorted list of numbers to a new file called "output.txt".
- # You should use TypeScript to write your code.
- # You should use Git to version control your code.
-  # The program should handle errors gracefully. If the input file does not exist or cannot be read, the program should display an error message and exit. If the output file cannot be written, the program should display an error message and exit.
- # The program should use an efficient sorting algorithm with a worst-case time complexity of O(n log n).
- # The program should use a data structure to store the list of numbers.
- # The program should use Object-Oriented Programming principles, including encapsulation, inheritance,
 and polymorphism.
- # The program should have a clear separation of concerns between the input/output code, the sorting code, and the data structure code.
- # The program should be well-documented with comments and follow a consistent coding style.

## Bonus Requirements:
- Add a feature that allows the user to specify the input and output file names on the command line.
- Add a feature that allows the user to choose between ascending or descending order for the sorting.
- Add a feature that allows the user to specify the sorting algorithm to use on the command line.
- Add a feature that allows the user to choose between different data structures for storing the list of numbers.
- Add a feature that allows the user to choose the delimiter used in the input file.
- Write a performance test for your code that measures the time it takes to sort a large list of numbers (e.g., 1 million numbers).

## Instructions:
- Fork and clone this repo.
- Run `yarn` to install dependencies.
- Run `yarn start` to run the index.ts file.


## Notes:
- You are allowed to use any resources you like during the test, including documentation and online tutorials.
- You should not copy and paste code from external sources without proper attribution.
- You will be evaluated based on the quality of your code, your ability to use OOP principles and Data Structures, and your ability to solve problems and learn new concepts.
- If you have any questions or issues during the test, please ask the recruiter for assistance.

Good luck!




// export class QuickSort implements SortingAlgorithm {
//   sort(arr: number[], order: SortingOrder): number[] {
//     console.log(SortingOrder.Ascending, order);
//     if (arr.length <= 1) return arr;

//     const pivot = arr[0];
//     const rest = arr.slice(1);

//     const left = rest.filter(x => x < pivot);
//     const right = rest.filter(x => x >= pivot);

//     const sortedLeft = this.sort(left, order);
//     const sortedRight = this.sort(right, order);

//     if (order === SortingOrder.Descending) {
//       return [...sortedRight, pivot, ...sortedLeft];
//     } else {
//       return [...sortedLeft, pivot, ...sortedRight];
//     }
//   }
// }

// export class MergeSort implements SortingAlgorithm {
//   sort(arr: number[], order: SortingOrder): number[] {
//     if (arr.length <= 1) return arr;

//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);

//     const sortedLeft = this.sort(left, order);
//     const sortedRight = this.sort(right, order);

//     return this.merge(sortedLeft, sortedRight, order);
//   }

//   private merge(
//     left: number[],
//     right: number[],
//     order: SortingOrder
//   ): number[] {
//     const result: number[] = [];
//     let i = 0;
//     let j = 0;

//     while (i < left.length && j < right.length) {
//       if (order === SortingOrder.Descending) {
//         if (left[i] >= right[j]) {
//           result.push(left[i]);
//           i++;
//         } else {
//           result.push(right[j]);
//           j++;
//         }
//       } else {
//         if (left[i] <= right[j]) {
//           result.push(left[i]);
//           i++;
//         } else {
//           result.push(right[j]);
//           j++;
//         }
//       }
//     }

//     return [...result, ...left.slice(i), ...right.slice(j)];
//   }
// }
