(() => new Promise((resolve) => resolve('promisecd')))() .then((p) => console.log(p)) 
setTimeout(() => console.log('timeout'), 0); 
setImmediate(() => console.log('immediate')); 
queueMicrotask(() => console.log('microtask')); 
process.nextTick(() => console.log('nexttick')); 