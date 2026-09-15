import { mkdir, rm } from "fs/promises";

// await mkdir("uploads");
// await mkdir("uploads/images");

// await mkdir ("docs/resumes/data", {recursive: true});

// remove only data folder
// await rm("docs", { recursive: true});

// remove main and sub folder also
await rm("docs", {recursive: true});