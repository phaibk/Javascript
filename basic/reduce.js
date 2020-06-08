/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/
function countOccurrences(arr) {
  return arr.reduce(function(current, item) {
    if (current[item]) {
      current[item]++;
    } else {
      current[item] = 1;
    }
    return current;
  }, {})
}
console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));// { a: 2, b: 2, c: 1 };