/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/
function findMostFrequent(arr) {
    var obj = arr.reduce(function(count, num) {
      if (count[num]) {
        count[num]++;
      } else {
        count[num] = 1;
      }
      return count;
    }, {})
    var max = Math.max(...Object.values(obj));
    var a = Object.keys(obj).filter (i => obj[i] === max);
    // var a=[];
    // for (var key in obj) {
    //   if (obj[key] === max){
    //     a.push(key);
    //   }
    // }
    return a.map(i => Number(i));
  }
  console.log(findMostFrequent([1,2,3,4,1,2,2,1]));