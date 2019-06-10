process.env.test = './index.js';

console.log(process.env.test);
console.log(process.memoryUsage());
console.log(`./index.js: ${process.cwd()}`);
