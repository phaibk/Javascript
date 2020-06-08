/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
    // viết code ở đây.
    if (arr.length < 2)
      return 0;
    else {
      var maxDiff = 0;
      for (var i = 1; i < arr.length; i++)
        maxDiff = (maxDiff < Math.abs(arr[i] - arr[i - 1])) ? Math.abs(arr[i] - arr[i - 1]) : maxDiff;
      return maxDiff;
    }
  }
  console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));