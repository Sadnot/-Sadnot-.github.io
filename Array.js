/*
-----------------------------------LÀM VIỆC VỚI MẢNG_1-------------------------------------

// Keyword: Javascript aray methods
    Array methods:
1. To string: chuyển dữ liệu từ kiểu mảng sang kiểu chuỗi
2. Join: tương tự như toString nhưng được sưa các dấu ngăn cách giữa các phần tử trong mảng
3. Pop: xóa Element cuối mảng và lấy ra Element đó
4. Push: thêm 1 hoặc nhiều Element(s) vào cuối mảng và trả về dộ dài mới của mảng
5. Shift: tương tự như pop nhưng ở đầu mảng
6. Unshift: tương tự như push nhưng ở đầu mảng
7. Splice(id, n, element(s)): xóa n phần tử từ ví trí id và thêm elemnt(s) vào vị trí id
8. Concat(Array2): nối Array1 vs Array2(có thứ tự)
9. Slice(a, b): cắt các Element(s) từ vị trí a đến b
*/

// var languages = [
//     'Javascrpt',
//     'PHP',
//     'Ruby'
// ];

// console.log(languages.toString())

// console.log(languages.join(', '))

// console.log(languages.pop())

// console.log(languages.push('Dart', 'Python', 'C'))
// console.log(languages)

// console.log(languages.shift('Python'))
// console.log(languages)

// console.log(languages.unshift('Python', 'C++'))
// console.log(languages)

// console.log(languages.splice(1, 1, 'C', 'C++'))
// console.log(languages)

// var languages2 = [
//     'Java',
//     'Python'
// ]
// console.log(languages2.concat(languages))

// console.log(languages.slice(0, 1))


// Bài tập:
/*
1. Cho biến input là mảng bất kì. Hãy chuyển đổi kiểu dữ liệu của input sang chuỗi và gán cho biến result.

Ví dụ:
1. Input: [1, 2, 3] - Output: '1,2,3'
2. Input: ['Javascript', 'PHP'] - Output: 'Javascript,PHP'

function arrayToString(input) {
let result = input.toString();
    return result;
}


2. Cho trước biến input là array bất kì. Hãy chuyển đổi kiểu dữ liệu biến input sang chuỗi, 
   mỗi giá trị của các phần tử được cách nhau bằng dấu ' - ', gán giá trị sau chuyển đổi cho biến result.

Ví dụ:
Input: [1, 2, 3] - Output: '1 - 2 - 3'
Input: ['Chicken', 'Tiger', 'Monkey'] - Output: 'Chicken - Tiger - Monkey'

function arrayToString(input) {
    let result = input.join(' - ');
    return result;
}


3. Cho biến anArray là mảng bất kì.

Nếu mảng có ít hơn 3 phần tử thì hãy xóa một phần tử đầu mảng đi
Nếu mảng có nhiều hơn 2 phần tử thì hãy xóa hai phần tử cuối mảng đi

Ví dụ:
1. Input: [10] - Output: []
2. Input: [6, 8] - Output: [8]
3. Input: [1, 2, 3, 4] - Output: [1, 2]

function run(anArray) {

    if(anArray.length<3){
        anArray.shift();
    }else if(anArray.length>=2){
        anArray.pop();
        anArray.pop();
    }

    return anArray;
}


4. Cho biến animals là mảng chứa tên các loài động vật. 
   Hãy thêm tên các loài động vật khác vào mảng animals tuân thủ theo các yêu cầu sau:

1. Nếu mảng không có phần tử nào, hãy thêm hai phần tử Cat, Mouse vào mảng
2. Nếu mảng có một phần tử, hãy thêm phần tử Elephant vào đầu mảng
3. Nếu mảng có trên hai phần tử, hãy xóa phần tử thứ hai đi và thêm hai phần tử Monkey, Tiger vào vị trí đã xóa

function run(animals) {

    if(animals.length===0){
        animals.push('Cat','Mouse');
    }else if(animals.length==1){
        animals.unshift('Elephant');
    }else if(animals.length>=2){
        animals.splice(1,1,'Monkey','Tiger');
    }
    return animals;
}


5.

function joinTwoArrays(products, newProducts) {

    let output = products.concat(newProducts);

    return output;
}

*/

/*
------------------------------------------------LÀM VIỆC VỚI MẢNG_2--------------------------------------

    Array methods:
1. forEach(function()): duyệt qua từng phần tử của mảng
2. every(function()): kiểm tra từng phần tử trong mảng có thỏa mãn 1 điều kiện nào đó hay không
3. some(function()): tương tự như some() nhưng chỉ cần 1 phần tử thỏa mãn thì sẽ dừng
4. find(function()): tìm và trả về 1 đối tượng thỏa mãn yêu cầu
5. filter(function()): tương tự find nhưng vs nhiều đối tượng
6. map(function()): chỉnh sửa, thay thế Element(s)
7. reduce(function()): trả về 1 phần tử duy nhất sau khi xử lý trên Array
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 200
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'PHP',
        coin: 400
    }
];

//  courses.forEach(function(index, course) {
//     console.log(index, course);
// });

// var isFree = courses.every(function(course, index) {
//     return course.coin === 0;
// });
// console.log(isFree);

// var isFree = courses.some(function(course, index) {
//     return course.coin === 0;
// });
// console.log(isFree);

// var course = courses.find(function(course, index) {
//     return course.name === 'PHP';
// });
// console.log(course);

// var course = courses.filter(function(course, index) {
//     return course.name === 'PHP';
// });
// console.log(course);

// function courseHandler(course, ) {
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`
//     };
// }

// var newCourses = courses.map(function(course) {
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         originArray: courses,
//     }
// });
// console.log(newCourses);

// function coinHandler(accumulator, curentValue) {
//     accumulator: biến lưu trữ
//     curentValue: giá trị đang xét
//     return accumulator + curentValue.coin;
// }
// var totalCoin = courses.reduce(coinHandler, 0);
// console.log(totalCoin);


//Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// },[]);
// console.log(flatArray)


//Lấy ra các phần tử của mảng và đưa vào mảng mới
// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "Javascript"
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP"
//             },
//             {
//                 id: 2,
//                 title: "NodeJS"
//             }
//         ]
//     }
// ];

// var newArray = topics.reduce(function(courses, topic) {
//     return courses.concat(topic.courses);
// }, []);
// console.log(newArray);

// var newCourses = topics.reduce(function(courses, topic) {
//     return courses.concat(topic.courses);
// },[]);

// var htmls = newCourses.map(function(courses) {
//     return `
//         <div>
//             <h2>${courses.title}</h2>
//             <p>ID: ${courses.id}</p>
//         </div>    
//     `;
// });
// console.log(htmls.join(''));


// ****TỰ TẠO 1 REDUCE(function(total, current)) METHOD:

// **Trường hợp 1: có truyền initialValue(giá trị khởi tạo)
// Array.prototype.reduce2 = function(callback, result) {
//     for (let i=0;i<this.length;i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.reduce((total, number) => {
//     return total + number;
// }, 0)
// console.log(result)

// **Trường hợp 2:không truyền initialValue(giá trị khởi tạo)
// Array.prototype.reduce2 = function(callback, result) {
//     let i=0;
//     if (arguments.length<2) {
//         i=1;
//         result = this[0];
//     }
//     for (;i<this.length;i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.reduce((total, number) => {
//     return total + number;
// })
// console.log(result)

// -----------------------------------------------------BÀI TẬP-------------------------------------------------------------------------
// Bài 2:
// Cho trước hàm checkPositiveNumbers có tham số numbers sẽ nhận một mảng gồm các phần tử là những số bất kì. 
// Hàm này được tạo ra với mục đích kiểm tra toàn bộ các chữ số trong mảng numbers có phải là số dương hay không.

// Yêu cầu
// Nếu toàn bộ phần tử trong mảng numbers là số dương hàm sẽ trả về true
// Nếu một trong các phần tử của mảng numbers không phải số dương hàm sẽ trả về false
// Ví dụ:

// Input: [1, 2, 3] - Output: true
// Input: [1, -8, 3] - Output: false
// Input: [-2, -6, 3] - Output: false

// function checkPositiveNumbers(numbers) {
//     let a = numbers.every(function(x) {
//         return x>0;
//     });
// return a;
// }

// Bài 3:
// Cho hàm hasFreeCourses để kiểm tra một danh sách khóa học có khóa học nào miễn phí hay không.
// Cho biến courses là tham số của hàm trên, biến này là một array chứa nhiều object đại diện cho khóa học có định dạng như sau:

// [
//     { name: 'Javascript', vnd: 1000000 },
//     { name: 'PHP', vnd: 990000 },
//     { name: 'HTML, CSS', vnd: 0 }
//     // ...
// ]
// Yêu cầu
// Hàm hasFreeCourses sẽ trả về true nếu đối số truyền vào có chứa khóa học miễn phí
// Hàm hasFreeCourses sẽ trả về false nếu đối số truyền vào không chứa khóa học miễn phí

// function hasFreeCourses(courses) {

//     let a = courses.some(function(x) {
//        return x.vnd == 0;
//     });
//    return a;
// }


// Bài 4:
// Cho trước biến monsters là một danh sách các con thú trong game có định dạng như sau:

// var monsters = 
// [
//     {
//         name: 'Cá heo',
//         attack: 50,
//         speed: 100,
//         hitpoint: 100,
//     },
//     {
//         name: 'Khủng long',
//         attack: 150,
//         speed: 80,
//         hitpoint: 180,
//     },
   
// ]

// Yêu cầu
// Tìm thú có chỉ số attack bằng 150 và trả về thú đó trong hàm findAMonsterByAttack đã cho trước (Trả về thú đầu tiên tìm được)
// Trường hợp trong danh sách monsters không có thú phù hợp thì hàm findAMonsterByAttack trả về null


// function findAMonsterByAttack(monsters) {
    
//     let a = monsters.find(function(x){
//         return x.attack === 150;
//     })
//     if (a === undefined) {
//         return null;
//     } else {
//         return a;
//     }


// Bài 5:
// Cho trước hàm findStringsInArrayByKeyword và tham số thứ nhất có tên keyword sẽ là một chuỗi bất kỳ.
// Tham số thứ hai có tên strings sẽ là một array chứa các chuỗi bất kì, array này có định dạng như sau:

// ['hi', 'abc', 'chuỗi', '123']

// Yêu cầu
// Trong hàm cho trước, hãy trả về một array mới gồm các phần tử trong array strings có chứa giá trị của biến keyword. Trường hợp không có phần tử phù hợp trả về mảng rỗng.

// Ví dụ:
// Input: PHP, ['Javascript', 'PHP'] - Output: ['PHP']
// Input: PHP, ['Javascript', 'PHP', 'Học PHP'] - Output: ['PHP', 'Học PHP']
// Input: Gấu, ['Javascript', 'PHP'] - Output: []

// function findStringsInArrayByKeyword(keyword, strings) {
//     return strings.filter(function(x){
//         if (x.includes(keyword)) {
//             return x;
//         }   
//     });
// }


// Bài 6:
// Tại bài tập này chúng ta sẽ cùng nhau tạo hàm findEqualValues để tìm ra các giá trị bằng nhau giữa hai array.

// Yêu cầu
// Tạo hàm findEqualValues có hai tham số là array1 và array2 (Hai tham số này sẽ được test case tại F8 truyền đối số là các array chứa nhiều các giá trị số hoặc chuỗi bất kì).
// Trường hợp array1 và array2 có các giá trị bằng nhau thì hàm findEqualValues sẽ trả về mảng mới chứa các giá trị đó (mỗi giá trị là một phần tử trong array mới)
// Trường hợp không có giá trị bằng nhau giữa hai tham số thì hàm trả về array rỗng []

// Ví dụ:
// Input: [1, 2, 6, 8], [2, 9, 6] - Output: [2, 6]
// Input: [1, 2, 3], [2, 9, 6] - Output: [2]
// Input: [1, 2, 3], [4, 5, 6, 7, 8] - Output: []
// Input: ['Gấu'], ['Lan', 'Hằng', 'Linh', 'Trang', 'Con gái'] - Output: []

// function findEqualValues(array1, array2) {
//     return array1.filter(function(num) {
//         return array2.includes(num);
//     });
// }


// Bài 7:
// Cho trước hàm convertToBoolean có tham số inputs là một array gồm các phần tử có giá trị bất kì. Ví dụ:

// [1, 'hi', false, 8, undefined, '', NaN]

// Yêu cầu
// Hãy xử lý để hàm trên trả về một mảng mới gồm các phần tử được chuyển đổi sang kiểu dữ liệu boolean

// Ví dụ:
// Input: [0, 1, 2] - Output: [false, true, true]
// Input: [NaN, 'hi', ''] - Output: [false, true, false]

// function convertToBoolean(inputs) {  
//     return inputs.map(function(x) {
//         if (x){
//             return true;
//         } else {
//             return false
//         }
//     });
// }


// Bài 8:
// Cho trước biến inputs là một array gồm các phần tử là các chữ số bất kì. Trong hàm run, hãy trả về array mới từ array inputs đã cho với giá trị các phần tử có giá trị x 3 lần.

// Ví dụ:

// Input: [1, 2, 3] - Output: [3, 6, 9]
// Input: [4, -8, 0] - Output: [12, -24, 0]

// function run(inputs) {

//     return inputs.map(function(x) {
//        return x*3;
//     });
// }


// Bài 9:
// Cho trước hàm convertToNumber và tham số inputs là một mảng gồm nhiều chuỗi chữa các số tương tự như sau:

// ['1', '6', '2', '8']
// Yêu cầu
// Dựa vào kiến thức đã học hãy xử lý để hàm convertToNumber trả về một array mới từ array inputs, các phần tử trong array trả về được chuyển đổi sang kiểu dữ liệu number.

// Ví dụ:

// Input: ['1', '2', '3'] - Output: [1, 2, 3]
// Input: ['2', '4', '10'] - Output: [2, 4, 10]
// Input: ['2.2', '4', '10'] - Output: [2.2, 4, 10]

// function convertToNumber(inputs) {
//     return inputs.map(function(x) {
//         return Number(x);
//     })
// }


// Bài 10:
// Cho trước hàm convertToString và tham số numbers là một mảng gồm nhiều các số tương tự như sau:

// [1, 20, -8, 0, 16]
// Yêu cầu
// Dựa vào kiến thức đã học hãy xử lý để hàm convertToString trả về một array mới từ array numbers, các phần tử trong array trả về được chuyển đổi sang kiểu dữ liệu string.

// Ví dụ:

// Input: [1, 2, 3] - Output: ['1', '2', '3']
// Input: [2, 4, 10] - Output: ['2', '4', '10']

// function convertToString(numbers) {
//     return numbers.map(function(x) {
//         return String(x);
//     });
// }


// Bài 11:
// Cho biến numbers là một mảng chứa các giá trị số bất kì. Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị của các phần tử trong mảng numbers

// Ví dụ:

// Input: [1, 2] - Output: 3
// Input: [1, 2, 0, 6] - Output: 9

// function sum(numbers) {
//     return numbers.reduce(function(a, b) {
//         return a+b;
//     }, 0)
// }


// Bài 12:
// Cho biến inputs là một mảng chứa các giá trị có thể là bất kì kiểu dữ liệu nào. Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị số hợp lệ của các phần tử trong mảng inputs

// Ví dụ:

// Input: [1, 2, function() {}, NaN] - Output: 3
// Input: [1, 2, 'hi', 0, 6] - Output: 9
// Input: [{}, 1, [], 2, 'hi', 0, 6] - Output: 9

// function sumNumbers(inputs) {
//     let filterArray = inputs.filter(Element => Number(Element) );
//         return filterArray.reduce((a,b) => (a+b)
//     );
// }


// Bài 13:
// Cho trước biến courses có định dạng như sau:

// [
//     { name: 'Javascript', coin: 1000 },
//     { name: 'PHP', coin: 1200 },
//     { name: 'Dart', coin: 1400 }
// ]
// Yêu cầu
// Trả về tổng coin của toàn bộ các khóa học

// function run(courses) {
//     var totalCoin = courses.reduce(function(total, course) {
//         return total + course.coin;
//     }, 0);
//     return totalCoin;
// }


// Bài 14:
// Tạo hàm getTotalAmount để tính tổng số tiền một đơn hàng.

// function getTotalAmount(numbers) {
//     return numbers.reduce((a,b)=>a+b.amount,0);
// }


// Bài 15:
// Thêm phương thức reduce2 cho kiểu mảng, logic hoạt động tương tự reduce gốc.

// const numbers = [1, 2, 3, 4, 5];
// Array.prototype.reduce2 =function(callback, result){
//     let i=0;
//     if(arguments.length<2) {
//         i=1;
//         result = this[0];
//     }
//     for(;i<this.length;i++){
//             result=callback(result, this[i], i, this);
//         }
//     return result;
// }
// const result = numbers.reduce2((total, number) =>{
//     return total+number;
// });
// console.log(result);


// Bài 16:
// Cho trước tham số grades là một mảng chứa các điểm số. Hãy viết logic tính tổng số điểm trong hàm cho trước.

// Lưu ý
// Hãy quan sát testacses để biết được tham số đầu vào và kết quả cần đạt được.

// Ví dụ:

// Giá trị của biến grades khi
// testcase này gọi hàm getSumOfGrades
// Input: [10, 5, 15, 20]

// Kết quả kì vọng hàm
// getSumOfGrades sẽ trả về
// Expect: 50
// Từ quan sát trên bạn hãy viết nội dung hàm getSumOfGrades sao cho khi đối số là [10, 5, 15, 20] thì kết quả trả về là 50 thì bạn sẽ vượt qua được testcase này.

// function getSumOfGrades(grades) {
//     var sum = grades.reduce((total, result) =>
//     {
//         return total+result;
//     });
//     return sum;
// }


// Bài 17:
// Tự viết một hàm tên là multiplyNumbers, hàm này sẽ được testcases tại F8 gọi và truyền đối số là một mảng gồm nhiều chữ số. Kết quả cần đạt được là hàm multiplyNumbers sẽ trả lại 1 số là 
// tích của toàn bộ các chữ số trong mảng đầu vào.

// function multiplyNumbers(numbers) {
//     var multiply = numbers.reduce((total, result) =>
//     {
//         return total*result;
//     });
//     return multiply;
// }












