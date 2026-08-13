const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};
const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 end");
};
const main = () => {
  console.log("main");
  f1();
  console.log("end main");
}
main();

//synchronous call
//Javascript is a single-threaded language, which means it can only execute one task at a time. When a function is called, it is added to the call stack and executed in order. In this code, the functions f1, f2, and f3 are called synchronously, meaning that each function must complete before the next one can start. The output will be:
//In asynchronus we use event loop to manage the call stack

//ASYNCHRONUS CALL USING TIMERS
//1. set timeout
//2. set imediate
//3. process.nextTick
//4. Promises