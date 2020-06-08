// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
  // viết code ở đây
  var strArr = str.split(" ");
  for (var i = 0; i < strArr.length; i++) {
    var charArr = strArr[i].split("");
    charArr[0] = charArr[0].toUpperCase();
    strArr[i] = charArr.join("");
  }
  return strArr.join(" ");
}
console.log(capitalize("abc"));
