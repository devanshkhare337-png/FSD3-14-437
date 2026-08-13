import { EventEmitter } from "node:events";
const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`logged in, ${name}!`);
};


task.on("login", sayHi);

task.emit("login", "Devansh");

const task = new EventEmitter();

task.on("greet", sayHi);
task.on("greet",)