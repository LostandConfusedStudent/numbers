// Define subjects array
var subjects = ["math", "physics", "programming"];

// First question
var answer = prompt("Is there a particular math subject you're studying?");
// Convert answer to all lowercase
answer = answer.toLowerCase();
console.log("Here is your subject: " + answer);

// Checking user's answer with given array
if (answer === subjects[0] || answer === subjects[1] || answer === subjects[2]) {
    alert("I'm studying that, too!!");
} else {
    alert("I know nothing of that subject...");
}

console.log("-----------------------");

var students = [
    {
        name: "Ray",
        subject: "math",
        age: "18",
        grade: "A+"
    },

    {
        name: "Jack",
        subject: "logic",
        age: "19",
        grade: "B"
    },

    {
        name: "Gary",
        subject: "physics",
        age: "97",
        grade: "F"
    }
];

alert("First student is " + students[0].name);
console.log("First student is " + students[0].name);
console.log("He is " + students[0].age + " years old and his grade is " + students[0].grade);

console.log("-----------------------");

alert("Third student is " + students[2].name);
console.log("Third student is " + students[2].name);
console.log("He is " + students[2].age + " years old and his grade is " + students[2].grade);

console.log("-----------------------");

alert("Meet your classmates");

for (var i = 0; i < students.length; i++) {
    console.log(students[i].name + " is studying " + students[i].subject);
}