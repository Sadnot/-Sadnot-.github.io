//---------------------------------------------------------MATH OBJECT---------------------------------------------------------------------------

// - Math.PI : trả về số PI đầy đủ
// - Math.round(num): làm tròn số
// - Math.abs(num): trả về giá trị tuyệt đối 
// - Math.ceil (num): CHỈ làm tròn TRÊN
// - Math.floor(num): CHỈ làm tròn DƯỚI
// - Math.random(num): mỗi lần refresh trình duyệt trả về 1 số ngẫu nhiên
// - Math.min(num) 
// - Math.max(num)

// console.log(Math.PI);
// console.log(Math.round(1.63));
// console.log(Math.abs(-3));

var random = Math.floor(Math.random() * 5);
var bonus = [
    '0 coin',
    '10 coin',
    '5 coin',
    '20 coin',
    '25 coin'
];
console.log(bonus[random]);
