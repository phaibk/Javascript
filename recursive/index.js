// 1) Xác định điểm dừng
// 2) Logic handle => Tạo ra điểm dừng
function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
  return num;
}
countDown(3);



function factorials(num) {
  if (num > 0) {
    return num * factorials(num - 1);
  }
  return 1;
}
console.log(factorials(3));
