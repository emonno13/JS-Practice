// Phân biệt var & let : node index.js để chạy

/** Scope trong javascript */
/**Global scope
 * Là scope lớn nhất trong file
 */
/**
 * Local scope / Block scope
 * Tất cả các scope có dạng {...} , if{...} , for { ... }
 */
/** Function scope
 * Những scope không được tạo bởi for, while, if, switch ,...
 */
/**
 * Lexical scope / Static scope / Closure
 * Những scope nằm bên trong một function scope khác
 * Bất cứ biến của parent scope đều có thể truy cập bởi child scope, nhưng ngược lại thì không
 */

// const scopeA = () => {
// 	const scopeB = () => {}
// 	scopeB()
// }

/***************************** EXAMPLE ************************************** */

/**************************** LOCAL SCOPE ********************************** */
// if (true) {
// 	var x = 1
// 	console.log(x) // 1
// 	if (true) {
// 		x = 2
// 		console.log(x) // 2
// 	}
// }
// console.log(x) // 2

// if (true) {
// 	let x = 1
// 	console.log(x) // 1
// 	if (true) {
// 		x = 2
// 		console.log(x) // 2
// 	}
// }
// console.log(x) // x is not defined

// if (true) {
// 	const x = 1
// 	console.log(x) // 1
// 	if (true) {
// 		console.log(x) // 2
// 	}
// }
// console.log(x) // x is not defined
/**************************************************************************** */
// const exam = () => {
// 	var x = 1
// 	console.log(x) // 1
// 	const exam1 = () => {
// 		x = 2
// 		console.log(x) // 2
// 	}
// 	exam1()
// }
// console.log(x) // x is not defined
// exam()
/**************************************************************************** */
// for (var k = 0; k < 5; k++) {
// 	console.log('Block scope:', k) // -- 0 1 2 3 4
// 	setTimeout(() => {
// 		console.log('SetTimeOut:', k) // 5 5 5 5 5
// 	})
// }
// console.log('Global scope:', k) // 5

// for (let i = 0; i < 5; i++) {
// 	console.log('Block scope:', i) // 0 1 2 3 4
// 	setTimeout(() => {
// 		console.log('SetTimeOut:', i) // 0 1 2 3 4
// 	})
// }
// console.log('Global scope', i) // undefined
/**************************************************************************** */
// console.log(greeting) // nếu var thì undefined, nếu let thì cannot access
// var greeting = 'say hello'
// let greeting = 'say hello'

/**************************************************************************** */

// var a = 1
// var a = 2
// console.log(a) // Identifier 'a' has already been declared

// let b = 1
// let b = 2
// console.log(b) // b = 2

/**************************************************************************** */

/**
 * Kết luận
 * Block / Local scope : 
	 var có phạm vi truy cập toàn cục, 
	 let/ const chỉ từ scope hiện tại đến scope con
 * Function scope : var & let chỉ có phạm vi scope hiện tại đến scope con
 * Hoisting : giá trị khởi tạo của var & let là undefined, const là missing err
 * Re-assign : var/let có, const không
 * Re-declare: var có, let/const không
 * Callback functions ( node apis ) : ví dụ hàm setTimeout : var nhận giá trị cuối, let tái khởi tạo giá trị mới
 */
