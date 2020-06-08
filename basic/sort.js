// Sort the objects in the array by age
var arr = [{
  name: "Quiet Samurai",
  age: 22
},
{
  name: "Arrogant Ambassador",
  age: 100
},
{
  name: "Misunderstood Observer",
  age: 2
},
{
  name: "Unlucky Swami",
  age: 77
}
]

function byAge(x) {
// Write code here...
return x.sort((a, b) => a.age - b.age);
}
byAge(arr);
console.log(arr);