/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    // viết code ở đây.	
    var lastStr = str.split('');
    var newArray = [];
    for (i = 0; i < lastStr.length; i++) {
      let indexNextChar = str.charCodeAt(i) + 1;
      let convert = String.fromCharCode(indexNextChar);
      newArray.push(convert);
    }
    return newArray.join('');
  }
  console.log(toNextChar('Hello'));