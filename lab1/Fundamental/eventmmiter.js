const { EventEmitter } = require("node:events");

const sayHi = (name) => {
    console.log(`${name} logged in`);

};

const task = new EventEmitter();

task.once("Exit", (name) => {
    console.log(`System shutdown by ${name}`);
});

task.once("greet", (name) => {
    console.log(`System started by ${name}`);
});

task.on("greet", sayHi);
task.on("greet", (name) => {
    console.log(`${name} starts working`);
});

task.on("greet", (name) => {
    console.log(`${name} logged out`);
});

task.emit("greet", "Rahul Singh");
console.log();
task.off("greet", sayHi);
task.emit("greet","Aviral Gupta");
task.emit("Exit","Manager")
task.removeAllListeners("greet");