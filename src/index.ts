import fs from "fs";
import path from "path";
import { SortedNumberList } from "./libs/sorts";

function main() {
  const file = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
  const [list] = file.split("\n");
  const listArray: Array<number> = list.split(", ").map(item => Number(item));

  const sortedResponse = new SortedNumberList(
    listArray,
    "quickSort",
    "descending"
  );

  const result = sortedResponse.sort();
  fs.writeFileSync(path.join(__dirname, "output.txt"), result.join(","));
}
main();
