import { FILE_LOCATION, UserPrompts } from './../constants';
import fs from "fs";
import path from 'path';
import { SortedNumberList } from './sorts';

export class FileHandler {
    private readonly userPrompts: UserPrompts;
    private sortedArray: number[]

    // setting user values which entered in console/prompt 
    constructor(userPrompts: UserPrompts) {
        this.userPrompts = userPrompts
        this.sortedArray = []
    }

    getFile(promptSuccess: boolean | undefined) {
        if (!promptSuccess) return;

        // file extracting
        let success = true
        try {
            // Read the input file
            const file = fs.readFileSync(path.join(__dirname, `${FILE_LOCATION}${this.userPrompts.inputFile}`), "utf-8");

            // Split file contents by new line and extract first line as list
            const [list] = file.split("\n");

            // Split list by comma and convert each element to number
            const listArray = list?.split(this.userPrompts.delimiter).map((item: string) => Number(item));

            // Check if the list contains at least two elements
            if (listArray.length <= 1) {
                console.error("File is unable to sort");
                return;
            }

            // Sort the list
            const sortedResponse = new SortedNumberList(
                listArray,
                "bubbleSort",
                this.userPrompts.order
            );
            this.sortedArray = sortedResponse.sort();
            return true
        } catch (err: any) {
            if (err.code === "ENOENT") {
                // Input file not found
                console.error("Unable to open input file: file does not exist");
            } else if (err.code === "EACCES") {
                // Permission denied for input file
                console.error("Unable to open input file: permission denied");
            } else if (err.code === "EISDIR") {
                // Input file is a directory
                console.error("Unable to open input file: specified path is a directory");
            } else {
                // Other input file error
                console.error("Unable to open input file: unknown error occurred");
            }
            success = false
        } finally {
            return success
        }
    }

    setFile(inputSuccess: boolean | undefined) {
        if (!inputSuccess) return;
        // file writing
        try {
            // Write the sorted list to output file
            fs.writeFileSync(path.join(__dirname, `${FILE_LOCATION}${this.userPrompts.outputFile}`), this.sortedArray.join(","));
        } catch (err: any) {
            if (err.code === "ENOENT") {
                // Output file directory does not exist
                console.error("Unable to write to output file: directory does not exist");
            } else if (err.code === "EACCES") {
                // Permission denied for output file
                console.error("Unable to write to output file: permission denied");
            } else {
                // Other output file error
                console.error("Unable to write to output file: unknown error occurred");
            }
        }
    }
}