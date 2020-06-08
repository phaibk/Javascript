// Sort an array alphabetically
function alphabetical(arr) {
  // Write code here...
  return arr.sort((a,b) =>{
    if (a.name > b.name) return -1;
  })
}
console.log(alphabetical([{name: "a"}, {name: "d"},{name: "b"},{name: "c"},{name: "e"},{name: "a"}]));