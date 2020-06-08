/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */

// Cách 1: Sử dụng vòng lặp for

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise

const axios = require ("axios").default;
var co = require ("co");

var urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
];

function getDataPromise(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url, function (response, error) {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}

var getData = co.wrap(function* (file) {
  var datas = yield urls.map((url) => axios.get(url));
  return datas;
});
getData(urls)
  .then(function (data) {
    // handle success
    console.log(data);
  })
  .catch(function (err) {
    // handle error
    console.log(err);
  });
