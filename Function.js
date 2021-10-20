// function showDialog() {
//     alert('Hello everyone');
// }

// showDialog();


//-------------------------------------THAM SỐ TRONG FUNCTION----------------------------
// function writeLog() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString);
// }

// writeLog('Log 1', 'Log 2', 'Log 3');

// BÀI TẬP:
// 1.  Tạo hàm showMessage và định nghĩa tham số message cho hàm này
//     Trong cặp {} của hàm vừa tạo thêm mã sau: alert(message);
//     Gọi hàm showMessage và truyền đối số cho tham số message là một chuỗi bất kì

// function showMessage(message) {
//     alert(message);

// }
// showMessage('F8');

// 2.  Tạo hàm writeLog, định nghĩa 2 tham số là prefix và message
//     Thêm vào trong cặp {} của hàm nội dung: console.log(prefix + ': ' + message);
//     Gọi hàm writeLog và truyền đối số cho hai tham số đã định nghĩa phía trên với nội dung là các chuỗi tùy ý.

// function writeLog(prefix, message) {
//     console.log(prefix + ': ' + message);
// }
// writeLog('Học lập trình','tại F8');


// 3.Tạo hàm sum có 2 tham số a và b. Đây là hàm thực hiện phép cộng giữa 2 số. Hàm sẽ trả về kết quả của a + b.

// Ví dụ:
// Input: 1, 10 - Output: 11
// Input: 2, 6 - Output: 8
// Input: -1, 10 - Output: 9

// function sum(a,b) {
//     let c=a+b;
//     return c;
// }
// sum(2,4);

