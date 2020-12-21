/** Tạo array mới */

// let createdArray = []
// let createdArray = [1, 2, 3]

// let createdArray = new Array()
// let createdArray = new Array(1, 2, 3)

// let createdArray = Array.from([])
// console.log(createdArray)

/** Sao chép array */
/**
 * Không nên sao chép bằng cách arr2 = arr1 vì vậy cả 2 arr sẽ cùng trỏ tới một ô nhớ. Việc thay đổi dữ liệu ở arr2 sẽ khiến arr1 thay đổi
 */
let arr = [1, 2, 3, 4, 5]

/**  
    Shallow copy
    Không an toàn để sao chép mảng đa chiều 
    Vd: a = [[1], [2]];
*/
// Spread operator
let arrB = [...arr]
// For loop
let arrC = []
let whileCount = 0
while (++whileCount < arr.length) {
	arrC[whileCount] = arr[whileCount]
}
// While loop
let arrD = []
for (let i = 0; i < arr.length; i++) {
	arrD[i] = arr[i]
}
// Array.map
let arrE = arr.map((item) => item)
// Array.filet
let arrF = arr.filter((item) => item)
// Array.reduce
let arrG = arr.reduce((result, item) => {
	result.push(item)
	return result
}, [])
// Array.from
let arrH = Array.from(arr)
// Array.slice
let arrJ = arr.slice()
// Array.concat
let arrK = arr.concat()
// Object.assign
let arrL = Object.assign([], arr)
// Object.value
let arrM = Object.values(arr)
/**  
    Deep copy
    An toàn để sao chép mảng đa chiều 
    Vd: a = [[1], [2]];
    Dùng JSON.stringify : object -> string
    Dùng JSON.parse : string -> object
*/
let arrN = JSON.parse(JSON.stringify(arr))

console.log(arrJ)

/**
 * References:
    https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
 */
