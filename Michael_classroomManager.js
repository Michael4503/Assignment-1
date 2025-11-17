module.exports = {
    //data stores
    students : [],
    assignments : [],
    submissions : [],

    //Function 1: Register Students to the class
    addStudent (name, adminNo, email) {
        this.students.push({name: name, adminNo: adminNo, email: email});
        return ('Student ' + name + ' added.');
    },

    //Function 2: Create assignments for the students
    addAssignment (title, assignmentID, description) {
        this.assignments.push({title: title, assignmentID: assignmentID, description: description});
        console.log('Assignment ' + title + ' added.')
    },

    //Function 3: Simulates Students submitting their assignments
    submitAssignment (adminNo, assignmentID, grade) {
        this.submissions.push({adminNo: adminNo, assignmentID: assignmentID, grade: null});
        console.log(adminNo + ' submitted assignment ' + assignmentID);
    },

    //Function 4: Simulate teacher grading students
    gradeAssignment (adminNo, assignmentID, grade) {
        const submission = this.submissions.find(
            (s) => s.adminNo === adminNo && s.assignmentID === assignmentID
        );
        if (submission) {
            submission.grade = grade;
            console.log('Student is graded');
        } else {
            console.log('Submission not found');
        }
    },

    //Function 5: Get student info by grade
    retrieveStudentsByGrade(grade) {
        const matchingAdminNos = [];

        // Collect all adminNos that match the grade
        for (let i = 0; i < this.submissions.length; i++) {
            if (this.submissions[i].grade === grade) {
                matchingAdminNos.push(this.submissions[i].adminNo);
            }
        }

        // Collect all students whose adminNo is in matchingAdminNos
        const matchingStudents = [];
        for (let j = 0; j < this.students.length; j++) {
            if (matchingAdminNos.includes(this.students[j].adminNo)) {
                matchingStudents.push(this.students[j]);
            }
        }

        if (matchingStudents.length > 0) {
            return matchingStudents;
        } else {
            console.log('There are no students with this grade.');
            return [];
        }
    }
}