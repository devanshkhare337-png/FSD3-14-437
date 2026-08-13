import {writefile, readfile} from "fs/promises";

const data = readfile ("stud.txt", "utf-8");
console.log ('file content:', data);

const addContent = (fname, content) => {
};

const readContent = (fname) => {

};

addContent("stud.txt", "This is a new line of content.");
console.log(readContent("stud.txt"));

const readContent = async (fname) => {
    const data = await readfile(fname, "utf-8");
    return data;
}

const apendContent = async (fname, content) => {
    await appendFile(fname, content);
    console.log("Data appended");
};

await addContent("notes.txt". "FS is easy in JS");
console.log("Contents\n", await readContent("notes.txt"));
