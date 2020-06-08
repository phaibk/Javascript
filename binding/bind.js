// var a = {
//   name: "AAA",
//   run: function () {
//     var run2 = function () {
//       console.log(this.name);
//     }.bind(this);
//     run2();
//   },
// };
// a.run();

//arrow function không có bind
// var a = {
//     foo: 'bar',
//     run: function(){
//         setTimeout(() => {
//           console.log(this.foo);
//         },1000 );
//     }
// };
// a.run();

var a ={
    foo: "bar",
    run: function(){
        setTimeout(function(){
            console.log(this.foo);
        }.bind(this), 2000);
    }
};
a.run();

