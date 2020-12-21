// Task 1
let a = {
	id: 1,
	startTime: 0,
	endTime: 120
}
let result = []
let id = 0
for (let endTime = 1; endTime < 24; endTime++) {
	for (let startTime = 0; startTime < endTime; startTime++) {
		result = [...result, { id, startTime, endTime }]
		id++
	}
}
console.log(result)

//Task 2
let b = [
	{
		id: 1,
		startTime: 180,
		endTime: 220
	},
	{
		id: 2,
		startTime: 0,
		endTime: 120
	},
	{
		id: 3,
		startTime: 110,
		endTime: 150
	}
]
let result2 = []
// for (let i = 1; i < b.length - 1; i++) {
// 	let j = i + 1
// 	result2.push([b[i].id, b[j].id])
// }
// console.log(result2)

for (let i = 0; i < b.length - 1; i++) {
	let j = i + 1
	if (b[i].endTime >= b[j].startTime) {
		result2.push([b[i].id, b[j].id])
	}
}
console.log(result2)
