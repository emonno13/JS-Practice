/**
 * split(seperator, limit)
 */
//let a = 'concon'
// console.log(a.split('o')) // --> [ 'c', 'nc', 'n' ]
// console.log(a.split()) // --> [ 'concon' ]
// console.log(a.split('')) // --> [ 'c', 'o', 'n', 'c', 'o', 'n' ]
// console.log(a.split('', 2)) // --> ['c','o']

/**
 * slice(start, end)
 */
// console.log(a.slice(0, 1)) // --> [0,1]

// Task 1
// 'aaaabbccc' --> ['a',4,'b',2,'c',3]

// let x = 'aaabaabbccc'
// let count = 0
// let result = x.split('').reduce(
// 	(acc, cur, index, arr) => {
// 		// acc chứa current value
// 		if (acc.includes(cur) === true) {
// 			count++
// 			if (index === arr.length - 1) {
// 				return [...acc, count]
// 			} else {
// 				return acc
// 			}
// 		}
// 		// acc không chứa current value
// 		if (acc.includes(cur) === false) {
// 			let temp = [...acc, count, ...cur]
// 			count = 1
// 			return temp
// 		}
// 	},
// 	[x.split('')[0]]
// )

// let removeDuplicate = stringToArray.reduce(
// 	(acc, cur, index, arr) => {
// 		return acc.includes(cur) === false ? [...acc, ...cur] : acc
// 	},
// 	[stringToArray[0]]
// )

/**
 * TASK 1 : 'baacabaabbccc' -->  [ 'a', 5, 'b', 4, 'c', 4 ]
 */
// let x = 'baa?cabaa:bbc:cckkoooHHHH??'
// let count = 1

// // đổi chuỗi thành mảng
// let stringToArray = x.split('')

// // xóa duplicate trong mảng
// const uniq = (a) => {
// 	return Array.from(new Set(a))
// }
// let removeDuplicate = uniq(stringToArray)
// let result = [...removeDuplicate.sort()]

// removeDuplicate.map((item, index) => {
// 	// đểm số lần xuất hiện của phần tử x trong mảng cũ
// 	let occurrences = stringToArray.filter((value) => {
// 		return value === item
// 	}).length
// 	// chèn số lần xuất hiện của x vào mảng mới
// 	result.splice(index + count, 0, occurrences)
// 	// tăng vị trí cần chèn
// 	count++
// })

// console.log('Input:', x)
// console.log('Output:', result)
