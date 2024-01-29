

var age = 26; 

//Gọi hàm thông báo



/**
 * Khai bao bien
 * Khai bao lenh
 */

/*
Built - in Function
1. alert
2. console
3. confirm
4. prompt
5. setTimeout
6. setInterval
*/
// var fullName = "Dang Ngoc Son";
// console.log(fullName) //console.warn, console.error

// //confirm('Xác nhận bạn đủ tuổi!'); //thông báo xác nhận
// prompt('Xác nhận bạn đủ tuổi!'); //xuất hiện hộp hội thoại

// setTimeout(function() {
//     alert("thông báo");21
// },2000) //Chạy 1 lần 
// setInterval(function() {
//     console.log("Đây là log" + Math.random()); //lặp lại liên tục sau 1 khoảng tgian cố định
// },2000)

/*

Gioi thieu toan tu: 
1. Toán tử số học
2. Toán tử gán
3. Toán tử so sánh
4. Toán tử logic

*/

// var a = 1;
// var b = 2;
// if (a < b) {
//     alert('dat');
// }

// if (a > 0 && b > 0) {
//     alert('a va b lon hon 0')
// }


// Toán tử gán

// Function - Hàm

// function showDialog() {
//     alert('Hi xin chao cac ban');
// }
// Toán tử call()

// showDialog();
/**
 * 1. Tham số
 * - Định nghĩa
 * - Kiểu dữ liệu
 * - Tính private ?
 * - 1 tham số
 * - Nhiều tham số
 */

// function writeLog(message, message2) {
//     console.log( message)
//     console.log( message2)

// }

// writeLog();

//  Object Constructor
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// var author = new User('Sơn','Đặng','Avatar')
// var user = new User('Vu','Nguyễn','Avatar')

// author.title = 'Chia sẻ tại F8 tại đây'
// user.comment = 'Có khóa nào khác ko ad :)'

// console.log(author.getName()) 
// console.log(user.getName())

/* Chuoi trong Javascript
1. Tao chuoi
- Cac cach tao chuoi
- nen dung cach nao
- kiem tra data type
2. Mot so Case su dung backlash (/)
3. xem do dai chuoi
4. chu y do dai khi viet code
5. template string ES6
*/

//syntax error: loi cu phap
// \' la dau ', dau \ o truoc de hien thi dau phia sau trong log
// var fullName = 'Son Dang is \'superman\''
// var fullName2 = 'Day la dau \\'
// console.log(fullName.length)
// console.log(fullName2)

// var fullName3 = "Mot vfffffffffffffffff"
// + "ffffffffffffffffffffff"
// + "fffffffffffffffffff2"
// console.log(fullName3)

// //ES6
// var firstName = 'Son'
// var lastName = "Dang"

// console.log(`Toi la: ${firstName} ${lastName}`)

// // LAM VIEC VOI CHUOI

// var myString = "          Hoc JS cung JS va JS va JS F8 school!    "

//1.Length
// console.log(myString.length)

//2.Find index
// indexof()
// console.log(myString.search('JS'))

//3.Cut string
// console.log(myString.slice(-7,-1)) // slice(start, end)

//4.Replace
// console.log(myString.replace(/JS/g,'JavaScript')) // Tim tat ca chuoi JS thay bang javascript

//5.Convert to uppercase
// console.log(myString.toUpperCase())

//6.Convert to lowercase
// .log(myString.toLowerCase())

//7.Trim
// console.log(myString.trim().length)

//8.Split
/*
var languages = 'Javascript'
console.log(languages.split(''))

var languages2 = 'Javascript, PHP, Ruby'
console.log(languages2.split(', '))
*/

//9.Get a character by index
// const myString2 = 'Son Dang'
// console.log(myString2.charAt(10))
// console.log(typeof myString2[10])


/*
// KIEU SO (NUMBER) TRONG JAVASCRIPT
var age = 18
var PI = 30000.32333933

var result = 20/ 1
console.log(isNaN(result))


// Lam viec voi number
- To String
- To Fixed

myString = age.toString()
console.log(typeof myString)
console.log(PI.toFixed(3))
*/

 
// MANG TROG JAVASCRIPT -- ARRAY
// 1. Tao mang

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Dart',
//     null,
//     undefined,
//     function () {

//     },
//     {}
// ]

// var languages = new Array(
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Dart',
//     null,
//     undefined,
//     function () {

//     },
//     {}
// )

// console.log(typeof languages)
// console.log(Array.isArray(languages))

// 2. Truy xuat mang

// console.log(languages.length)
// console.log(languages[1])


/*
LAM VIEC VOI ARRAY 

1. toString
2. join
3. pop: xoa phan tu cuoi mang va tra ve phan tu da xoa
4. push: them phan tu vao cuoi mang va tra ve do dai mang sau khi dc them
5. shift: xoa phan tu dau mang va tra ve phan tu da xoa
6. unshift: them phan tu vao dau mang va tra ve do dai mang sau khi dc them
7. splicing: 
8. Concat
9. slicing

*/
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Dart'
]
var languages2 = [
    'Java',
    'C++'
]
 
// console.log(languages.join(', '))

//console.log(languages.pop())
// xoa element cuoi mang va tra ve phan tu da xoa

// console.log(languages.push('Java','Nodejs'))
// // them phan tu vao cuoi mang va tra ve do dai mang sau khi dc them
// console.log(languages)

// console.log(languages.shift())
// // xoa phan tu dau mang va tra ve phan tu da xoa
// console.log(languages)

// console.log(languages.unshift('Java','NodeJs'))
// // them phan tu vao dau mang va tra ve do dai mang sau khi dc them
// console.log(languages)

// languages.splice(1, 2, 'C++','Java')
// console.log(languages)

// console.log(languages.concat(languages2))
// console.log(languages.slice(-2, -1)) 


// OBJECT PROTOTYPE -- BASIC
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.avatar = avatar
//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// User.prototype.className = 'F8'
// User.prototype.getClassName = function (){
//     return `Class Name: ${this.className}`
// }
// var user = new User('Son','Dang','Avatar 1')
// var user2 = new User('Dat','Dang','Avatar 2')

// console.log(user)
// console.log(user2.getClassName())

// ĐỐI TƯỢNG DATE

var date = new Date()
var year = date.getFullYear()
var month = date.getMonth() + 1
var day = date.getDate()

// console.log(year)
// console.log(month)
// console.log(day)
console.log(`${day}/${month}/${year}`)

// IF - ELSE
// var date = -1
// if (date === 3) {
//     console.log('thu 2')
// } else if(date > 0) {
//     console.log('thu 3')
// } else if (date === 4) {
//     console.log('thu 4')
// } else {
//     console.log('deo biet')
// }

// SWITCH
// var date = 12
// switch(date) {
//     case 2: 
//     case 3:
//     case 4:
//         console.log('thu 2,3,4')
//         break
//     case 5:
//         console.log('thu 5')
//         break
//     default:
//         console.log('deo biet')
// }

// Toan tu 3 ngoi - Tenary operator
var course = {
    name: 'Javascript',
    coin: 250
}
// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`)
// } else {
//     console.log("Free")
// }

var result = course.coin > 0 ? `${course.coin} Coins`: 'Free'
console.log(result)

var a = -2
var b = 15

var c = a > 0 ? a : b
console.log(c)

// Vong lap

//1. For -- lap voi dieu kien dung
//2. For/in: lap qua key cua doi tuong
//3. For/of: lap qua value cua doi tuong
//4. while: lap khi dieu kien dung
//5. do/while - lap it nhat 1 lan, sau do lap khi dieu kien dung

//For loop

// var myArray = [
//     'Javascript',
//     'PHP',
//     'Java',
//     'Dart'
// ]
// var arrayLength = myArray.length

// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i])
// }

// For/in loop
// var myInfo = {
//     name: 'Son Tung',
//     age: 18,
//     address: 'Ha Noi, VN'
// }

// for (var key in myInfo) {
//     console.log(myInfo[key])
// }

// var languages = 'Javascript'

// for (var key in languages) {
//     console.log(languages[key])
// }


// For/of loop

// var myArray = {
//     name: 'Son Dang',
//     age: 18
// }
// console.log(Object.values(myArray))

// for (var value of Object.values(myArray)) {
//     console.log(value)
// }

//  for (var value of Object.keys(myArray)) {
//      console.log(myArray[value])
//  }

// while loop

// var i = 9
// while (i < 1000) {
//     console.log(i)
//     i++
// }

// var myArray = [
//     'Javascript',
//     'PHP'
// ]

// var i = 0
// while (i < myArray.length) {
//     console.log(myArray[i])
//     i++
// }


// do/while loop

// var i = 0
// var isSuccess = false

// do {

//     i++
//     console.log('Nap the lan '+ i)

//     // Thanh cong
//     if (false) {
//         isSuccess = true;
//     }
    
// } while (!isSuccess && i <= 3)

// break and continue
// for (var i=0; i < 10; i++) {
//     console.log(i)

//     if(i >= 5){
//         break
//     }
// }

// for (var i=0; i < 10; i++) {
//     if (i % 2 ==0) {
//         continue
//     }
//     console.log(i) 
// }


// Vong lap long nhau - Nested loop
// var myArray = [
//     [1,2],
//     [8,3],
//     [5,9]
// ]
// for (var i = 0; i < myArray.length; i++) {
//     for (var j = 0; j < myArray[i].length; j++){
//         console.log(myArray[i][j])
//     }
// }

/*
// Lam viec voi mang - part 2
    Array method:
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()

*/
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 200
    },
    {
        id: 2,
        name: 'ReactJS',
        coin: 0
    },
    {
        id: 3,
        name: 'HTML, CSS',
        coin: 200
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 500
    }
]
//** forEach(): Duyet tung phan tu trong mang array
courses.forEach(function(course, index) {
    console.log(index, course)
});
// 
courses.forEach(function(course, index) {
    console.log(index, course)
});

const numbers = [21, 38, 55, 9]
numbers.forEach(function(number, index, arr){
    arr[index] = number * 10
    console.log(arr[index])
})

//** every() : Tra ve kieu boolean kiem tra xem tat ca phan tu co thoa dieu kien ko
// var isFree = courses.every(function(course, index){
//     console.log(index)
//     return course.coin === 0
// })

// console.log(isFree)

//** some(): Tra ve kieu boolean kiem tra xem co 1 phan tu thoa man dieu kien ko
// // var isFree = courses.some(function(course, index){
// //     console.log(index)
// //     return course.coin === 0
// // })

// console.log(isFree)

//** find(): tra ve duy nhat 1 phan tu thoa dieu kien nao do
// var course = courses.find(function(course, index){
//     return course.name === 'Ruby'
// })

// console.log(course)

//** filter(): tra ve 1 danh sach phan tu thoa dieu kien nao do
var listCourse = courses.filter(function(course, index){
    return course.name === 'Ruby'
})

console.log(course)

