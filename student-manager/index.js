var fs = require("fs");
var readlineSync = require("readline-sync");
var students = [];
function loadData() {
  var fileContent = fs.readFileSync("./data.json", { encoding: "utf8" });
  students = JSON.parse(fileContent);
}
function showMenu() {
  console.log("1. Show all students");
  console.log("2. Create a new students");
  console.log("3. Save & Exit");
  var option = readlineSync.question("> ");
  switch (option) {
    case "1":
      showStudents();
      showMenu();
      break;
    case "2":
      createStudent();
      showMenu();
      break;
    case "3":
      saveAndExit();
      break;
    default:
      console.log("Wrong option");
      showMenu();
      break;
  }
};
function sortStudent(arr){
 return arr.sort((a ,b) => a.age - b.age);
};
function showStudents() {
  sortStudent(students);
  for (var student of students) {
    console.log('Student: Name: ',student.name,' ', 'Age: ',student.age);
  }
}
function createStudent() {
  var name = readlineSync.question("Name: ");
  var age = readlineSync.question("Age: ");
  var student = {
    name: name,
    age: parseInt(age),
  };
  students.push(student);
}
function saveAndExit() {
  var content = JSON.stringify(students);
  fs.writeFileSync("./data.json", content);
}
function main() {
  loadData();
  showMenu();
}
main();
