var fs = require("fs");
var co = require("co");

function readFilePromise(path) {
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

// readFilePromise('song1.txt')
// .then(function(song1) {
//     console.log(song1);
// })
// readFilePromise('song2.txt')
// .then(function(song2) {
//     console.log(song2);
// })
// readFilePromise('song3.txt')
// .then(function(song3) {
//     console.log(song3);
// })
// .catch(function(error){
//     console.log(error);
// })

//*Promise all
// Promise.all([
//     readFilePromise('song1.txt'),
//     readFilePromise('song2.txt'),
//     readFilePromise('song3.txt')
// ])
// .then(function(values) {
//     console.log(values);
// })
// .catch(function(error){
//     console.log(error);
// });

//option 1

// co(function* () { // gnerator function
//   var song1 = yield readFilePromise("./song1.txt");
//   var song2 = yield readFilePromise("./song2.txt");
//   var song3 = yield readFilePromise("./song3.txt");
//   return [song1, song2, song3];
// })
//   .then(function (values) {
//     console.log(values);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//option 2

// co(function* () {
//   // gnerator function
//   var values = yield [
//     readFilePromise("./song1.txt"),
//     readFilePromise("./song2.txt"),
//     readFilePromise("./song3.txt"),
//   ];
//   return values;
// })
//   .then(function (values) {
//     console.log(values);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//option 3
var readFile = co.wrap(function* (files) {
  // [String] =>  [Promise]
  var values = yield files.map((file) => readFilePromise(file));
  return values;
});
readFile(["song1.txt", "song2.txt", "song3.txt"])
  .then(function (values) {
    console.log(values);
  })
  .catch(function (error) {
    console.log(error);
  });
