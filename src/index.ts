import fs from "fs";
import path from "path";
import { SortedNumberList } from "./libs/sorts";

/**
 * Reads input.txt, sorts the list, and writes the sorted list to output.txt
 */
function main(): void {
  try {
    const file = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

    // Split file contents by new line and extract first line as list
    const [list] = file.split("\n");

    // Split list by comma and convert each element to number
    const listArray = list?.split(", ").map((item) => Number(item));

    // Check if the list contains at least two elements
    if (listArray.length <= 1) {
      console.error("File is unable to sort");
      return;
    }

    // Sort the listu
    const sortedResponse = new SortedNumberList(
      listArray,
      "bubbleSort",
      "ascending"
    );
    const result = sortedResponse.sort();

    // Write the sorted list to output.txt
    fs.writeFileSync(path.join(__dirname, "output.txt"), result.join(","));
  } catch (err: any) {
    
    // Handle file read error
    if (err.code === "ENOENT") {
      console.error("Unable to open file: file does not exist");
    } else if (err.code === "EACCES") {
      console.error("Unable to open file: permission denied");
    } else if(err.message){
      console.error(err.message)
    }else {
      console.error("Unknown error occurred");
    }
  }
}

// Call the main function
main();
