//-------------------XỬ LÝ ARRAY & ARRAY OF OBJECTS -------------------- //

/**
 * Xem trước :
	array.filter, array.some, JSON.stringtify(object),array.findIndex,
	new Set(array).has() === a,

 */
/**
 * 3 cách để lí luận mệnh đề trả về
	a.function(item => {if(...) return ...})
	a.function(item => {return ...})
	a.function(item => ...)
*/
/**
 * Câu 1: -----------------------------------------------------------
    Return về một array chứa những elements chung của hai array trong js
 */

/** Array */
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const b = [4, 5, 6, 100]
// const result = a.filter((item) => {
// 	return b.indexOf(item) > -1
// })
// console.log(result)

/** Array of Objects */
// const a = [
// 	{ id: 1, name: 'khanh' },
// 	{ id: 2, name: 'nhat' }
// ]
// const b = [
// 	{ id: 1, name: 'nam' },
// 	{ id: 2, name: 'nhat' },
// 	{ id: 3, name: 'linh' }
// ]
// const result = a.filter((item_a) => {
// 	return b.some((item_b) => JSON.stringify(item_a) === JSON.stringify(item_b))
// })
// console.log(result)

/**
 * Câu 2:--------------------------------------------------------------------
    Return về một array chứa tất cả những elements của hai array không trùng lặp
 */
/** Array */
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const b = [4, 5, 6, 10]
// const result = a.concat(b.filter((item) => !a.includes(item)))
// console.log(result)

/** Array of Objects */
// const a = [
// 	{ id: 1, name: 'khanh' },
// 	{ id: 2, name: 'nhat' }
// ]
// const b = [
// 	{ id: 1, name: 'khanh' },
// 	{ id: 2, name: 'nhat' },
// 	{ id: 3, name: 'nam' }
// ]
// const result = a.concat(b)
// const newResult = result.filter((value, index, array) => {
// 	let y = array.findIndex((item) => item.id === value.id) === index
// 	console.log(y)
// })
// const newResult = result.filter((value, index, result) => {
// 	return (
// 		result.findIndex((t) => JSON.stringify(t) === JSON.stringify(value)) ===
// 		index
// 	)
// })
// console.log(newResult)

/**
 * Câu 3:--------------------------------------------------------------------
	Return về một array chứa tất cả những elements của array thứ nhất không trùng với array thứ 2
	Hay loại bỏ những phần tử bị trùngg với array 2 với array 1 
 */
/** Array */
// const a = [1, 2, 3, 4, 5, 8, 9] // [5,8,9] có ở arr2
// const b = [5, 6, 7, 8, 9]
//const result = a.filter((item) => !new Set(b).has(item))
// const result = a.filter((item) => {
// 	return !b
// 		.filter((item_b, index) => b.indexOf(item_b) === index)
// 		.includes(item)
// })
// console.log(result)

/** Array of Objects */
// const a = [
// 	{ id: 1, name: 'khanh' },
// 	{ id: 2, name: 'nhat' },
// 	{ id: 3, name: 'nam' }
// ]
// const b = [
// 	{ id: 1, name: 'khanh' },
// 	{ id: 2, name: 'nhat' },
// 	{ id: 4, name: 'hong' }
// ]
// const result = a.filter(
// 	(item_a) =>
// 		!b.some((item_b) => JSON.stringify(item_a) === JSON.stringify(item_b))
// )
// const result = a.filter((item_a) =>
// 	b.every((item_b) => JSON.stringify(item_a) !== JSON.stringify(item_b))
// )
// console.log(result)

/**
 * Câu 4:--------------------------------------------------------------------
	Return về một array chứa tất cả những elements của cả hai và bỏ đi phần trùng của cả hai
 */
/** Array */
// const a = [1, 2, 3, 4, 5, 8, 9]
// const b = [5, 6, 7, 8, 9]
// const result = Array.from(
// 	new Set(
// 		a.concat(b).filter((item) => !new Set(a).has(item) || !new Set(b).has(item))
// 	)
// )
// console.log(result)

/** Array of Objects */
// const a = [
// 	{ name: 'name1', id: 1 },
// 	{ name: 'name2', id: 2 },
// 	{ name: 'name3', id: 3 },
// 	{ name: 'name4', id: 4 }
// ]
// const b = [
// 	{ name: 'name1', id: 1 },
// 	{ name: 'name4', id: 4 },
// 	{ name: 'name4', id: 4 },
// 	{ name: 'name5', id: 5 }
// ]
// const result = Array.from(
// 	a
// 		.concat(b)
// 		.filter(
// 			(item) =>
// 				!a.some((item_a) => JSON.stringify(item_a) === JSON.stringify(item)) ||
// 				!b.some((item_b) => JSON.stringify(item_b) === JSON.stringify(item))
// 		)
// )
// console.log(result)

/**
 * Câu 5:--------------------------------------------------------------------
	Sắp xếp array theo thứ tự
 */
/** Array */
// let a = [1, 5, 6, 2, 4, 3]
// console.log(a.sort((a, b) => a - b))
// console.log(a.sort((a, b) => b - a))

/** Array of objects*/
// let a = [
// 	{ id: 2, name: 'Nam' },
// 	{ id: 3, name: 'Minh' },
// 	{ id: 1, name: 'Khanh' },
// 	{ id: 5, name: 'Nhat' }
// ]
// console.log(a.sort((a, b) => a.id - b.id))
// console.log(a.sort((a, b) => b.id - a.id))

/**
 * Câu 6:--------------------------------------------------------------------
	Tìm max trong array
 */
/** Array */
// let a = [1, 99, 5, 100, 87, 70]
// console.log(Math.max(...a))
// console.log(Math.max.apply(this, a))
// let resultByReduce = a.reduce((prev, cur, curIndex, arr) => {
// 	return Math.max(prev, cur)
// }, 0)
// console.log(resultByReduce)

/** Array of objects */
// const arr = [
// 	{ id: 1, name: 'khanh' },
// 	{ id: 3, name: 'long' },
// 	{ id: 4, name: 'nhat' },
// 	{ id: 2, name: 'nam' }
// ]
// const arr1 = Math.max.apply(
// 	Math,
// 	arr.map((item) => item.id)
// )
// console.log(arr1)
// const arr2 = arr.sort((a, b) => b.id - a.id)[0].id
// console.log(arr2)

/**
 * Câu 7 : ---------------------------------------------------------------
		Tìm SUM trong array
 */
/** Array */
// const arr = [1, 2, 3, 4, 5, 66, 2, 31]
// const sum = arr.reduce((previous, current) => {
// 	return current + previous
// }, 0)
// console.log(sum)

/**Array of Objects */
// const arr = [{ age: 12 }, { age: 15 }, { age: 13 }, { age: 14 }]
// const sum = arr.reduce((previous, current) => {
// 	return current.age + previous
// }, 0)
// console.log(sum)

/**
 * Câu 8 : ---------------------------------------------------------------
		Check một phần tử trong array có thỏa điều kiện X nào đó không
 */
// console.log([1, 2, 3].includes(21))
// console.log([1, 2, 3].indexOf(21))
// console.log([1, 2, 3].find((item) => item === 21))
// console.log([1, 2, 3].findIndex((item) => item === 21))

/**
 * Câu 9 : ---------------------------------------------------------------
		Check mọi phần tử trong array có thỏa điều kiện X không 
 */

// const a = [1, 2, 3].every((item) => {
// 	return item > 2
// })

// const b = [{ age: 3 }, { age: 4 }, { age: 5 }].every((item) => {
// 	return item.age > 2
// }) // true

// console.log(a)
// console.log(b)

const arr = []
const arr1 = []
const a = 0
true ? arr1.push(a) && arr.push(a) : null
console.log(arr, arr1)
