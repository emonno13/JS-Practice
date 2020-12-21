// const { performance } = require('perf_hooks')

// var t0 = performance.now()
// var a = [1, 2, 3]
// a.map((item) => console.log(item))
// var t1 = performance.now()
// console.log(`${t1 - t0} ms`)

console.time('time')
let a = [1, 2, 3, 4, 5].slice()
console.timeEnd('time')
