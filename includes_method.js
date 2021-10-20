//------------------------------------------INCLUDES()_METHOD----------------------------------------------------------

// includes('string',position): kiểm tra chuỗi có cụm từ tìm không. Nếu có trả về true, ngược lại trả về false.
//     string: chuỗi cần tìm
//     position: ví trị bắt đầu (không bắt buộc, mặc định bằng 0)

// var title = 'Reponsive web design';
// console.log(title.includes('here'));


// var courses = ['Javascript', 'PHP', 'Dart'];
// console.log(courses.includes('PHP'));

//----------------------------------------------------BÀI TẬP-----------------------------------------------------------
// Bài 1:
// Cho trước hàm run và đối số input có thể là bất cứ kiểu dữ liệu nào. Hãy viết nội dung cho hàm run:

// Nếu includes có thể sử dụng trên input thì hãy tìm chuỗi F8 (nếu input là string) hoặc tìm phần tử F8 (nếu input là array). Nếu tìm thấy thì hàm run trả về true, trường hợp khác trả về false.
// Ví dụ:
// Input: 'Học lập trình tại F8'. Output: true
// Input: ['F8', 'Học lập trình']. Output: true
// Input: ['F8 website', 'Học lập trình']. Output: false
// Input: 'Học lập trình tại f8'. Output: false

// function run(input) {
//     if (String('input') && input.includes('F8')) {
//         return true;
//     }else if(Array('input') && input.includes('F8')){
//         return true;
//     }
//     else
//         return false;
// }
