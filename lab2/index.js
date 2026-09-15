import { writeFile, readFile, appendFile } from "fs/promises";

const addContent = async (fname, content) => {
  await writeFile(fname, content);
  console.log(`${content} written in file: ${fname}`);
};

const readContent = async (fname) => {
  const data = await readFile(fname, "utf-8");
  return data;
};

const appendData = async (fname, content) => {
  await appendFile(fname, `\n${content}`);
  console.log(`Data appended to ${fname}`);
};

await addContent("notes.txt", "FS is easy in JS");
console.log("Contents:");
console.log(await readContent("notes.txt"));

await appendData("notes.txt", "It can add, read and update content");
console.log("Updated Contents:");
console.log(await readContent("notes.txt"));