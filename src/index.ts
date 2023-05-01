import { UserPropmts } from "./libs/userPrompt";
import { FileHandler } from "./libs/fileHandler";


/**
 * Reads input.txt, sorts the list, and writes the sorted list to output.txt
*/

async function main(): Promise<void> {

  try {
    // getting userPrompt values
    const userPrompts = await UserPropmts.setUserValues()

    // instantiation of filehandler

    const fileHanlder = new FileHandler(userPrompts)

    // getting file content
    // as delimeter is last field so setted as flag value here
    const inputSuccess = fileHanlder.getFile(!!userPrompts.delimiter)

    // setting file content
    fileHanlder.setFile(inputSuccess)

  } catch {
    throw Error
  }

}

// Call the main function
main();




