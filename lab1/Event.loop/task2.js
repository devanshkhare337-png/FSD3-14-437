const f1 = () => {
  console.log("f1");
};

const f2 = () => {
  console.log("f2");
};

const main = () => {
  console.log("main");
  setTimeout(f1, 0);
  setImmediate(f2);
  process.nextTick(() => {
    console.log("end");
  });
};
main();

//Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. Promises have three states: pending, fulfilled, and rejected. You can use the .then() method to handle the fulfilled state and the .catch() method to handle the rejected state. Here's an example of using promises:
import fs from "fs/promises";

const writeData = () => {
    try {
        console.log("writing data to file");
        await fs.writeFile("stud.txt", "Hello World");
        console.log("file written successfully");
    } catch (err) {
        console.log("Error occurred while writing to file");
    }
};