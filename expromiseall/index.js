/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

const axios = require('axios').default;
  var url1 = 'https://jsonplaceholder.typicode.com/todos/1';
  var url2 = 'https://jsonplaceholder.typicode.com/todos/2';
  var url3 = 'https://jsonplaceholder.typicode.com/todos/3';

function getData (url) {
    return new Promise(function(resolve, reject){
      axios.get(url,function(response, error){
        if (error) {
          reject (error);
        } else {
          resolve (response);
    }
});
    });
}

Promise.all([
  axios.get(url1 ),
  axios.get(url2 ),
  axios.get(url3 )
])
  .then(function (data) {
    // handle success
    console.log(data);
  })
  .catch(function (err) {
    // handle error
    console.log(err);
  })