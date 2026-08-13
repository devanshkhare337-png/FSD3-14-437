import {mkdir,rm} from "fs/promises";

//await mkdir("uploads");
//await mkdir("uploads/images");

//await mkdir("docs/resume/data", {recursive: true});

//removes only data folder
//await rm("docs/resume/data", {recursive: true, force: true});

//Removes main folder and sub folder also

await rm("docs", {recursive: true, force: true});    