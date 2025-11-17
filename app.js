const classroomManager = require('./Michael_classroomManager');

//Add Student
classroomManager.addStudent("Alice", "1000", "alice@gmail.com");
classroomManager.addStudent("Bob", "2000", "bob@gmail.com");
console.log("Current students: ", classroomManager.students);

//Add Assignments
classroomManager.addAssignment("Assignment 1", "EGL100", "Create a web application.");

classroomManager.addAssignment("Test 1", "EGL101", "Answer 10 MCQ questions.");
console.log("Current assignments: ", classroomManager.assignments);

//Submit Assignments
classroomManager.submitAssignment("1000","EGL100");

classroomManager.submitAssignment("2000", "EGL101");
console.log("Current submissions: ", classroomManager.submissions);

//Grade assignments
classroomManager.gradeAssignment("1000", "EGL100", "A");
classroomManager.gradeAssignment("2000", "EGL101", "B");
console.log("Submissions after grading: ", classroomManager.submissions);

//Retrieve students by grade
console.log("Students with grade A: ", classroomManager.retrieveStudentsByGrade("A"));