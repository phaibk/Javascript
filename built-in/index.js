/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */
//* 1. Sử dụng module fs để đọc file `data.json`
var fs = require('fs');
var data = fs.readFileSync('data.json',{encoding: 'utf8'});
console.log(data);

//2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object

var dataObj = JSON.parse(data);
console.log(typeof dataObj);
console.log(dataObj);
//3. Log property `name` từ object ở bước 2

console.log(dataObj.name);
 //* 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
dataObj.members = ['Minh Hai', 27, 'male'];
console.log(dataObj);

//* 5. Ghi lại dữ liệu vào file data.json
var data = JSON.stringify(dataObj);
console.log(data);
fs.writeFileSync('./data.json', data);