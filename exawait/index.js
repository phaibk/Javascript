// fs.readFile("./data.json", { encoding: "utf8" }, function (err, data) {
//   console.log("Data loaded from disk", data);

//   axios
//     .get("https://jsonplaceholder.typicode.com/todos/1")
//     .then(function (res) {
//       console.log("Data downloaded from url", res.data);
//     });
// });

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */

var fs = require("fs");
var axios = require("axios");

function loadDisk(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, { encoding: "utf8" }, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function load() {
  let data1 = await loadDisk("./data.json");
  let data2 = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  return [data1, data2];
}
load()
.then(data => console.log ('Data loaded: ', data))
.catch(err => console.log ('Errors: ', err));