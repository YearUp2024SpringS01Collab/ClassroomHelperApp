"use strict";

function getStudentsAvailableForSelection() {
  let availableStudents = [];

  let siteData = getSiteData();

  for (let student of siteData.students) {
    let studentName = student.studentName;
    if (
      !siteData.alreadySelected.includes(studentName) &&
      !siteData.selectedStudentName.includes(studentName)
    ) {
      availableStudents.push(studentName);
    }
  }

  return availableStudents;
}

function selectStudent(studentName) {
  //safety!  make sure the studentName is actually a student by confirming in the students array;
  //move selected student (if any) into alreadyselected array
  //set new studentName as currently selected student
}

function addStudentProgress(studentName, assignmentName) {
  //declaring variables
  let siteData = getSiteData();

  // creating loops to verify the data
  for (student of student.siteData.students) {
    if (student.studentName == studentName) {
      for (let assignment of student.siteData.assignments) {
        if (assignment.assignmentName == assignmentName) {
          for (let record of siteData.studentProgress) {
            if (
              record.studentName == studentName &&
              record.assignment == assignmentName
            )
              return true;
          }
        }
        return false;
      }
    }
  }
}

function removeStudentProgress(studentName, assignmentName) {
  let siteData = siteData();

  for (let student of siteData.students) {
    if (student.studentName == studentName) {
      for (let assignment of siteData.assignments) {
        if (assignment == assignmentName) {
          siteData.studentProgress = site;
        }
      }
    }
  }
}

function getStudentProgress(studentName, assignmentName) {
  //return either true if they HAVE completed the assignment
  //or a FALSE if they HAVE NOT
}

function addStudent(studentName, studentEmail) {
  let siteData = getSiteData();

  let newStudent = {
    studentName: studentName,
    studentEmail: studentEmail,
  };

  siteData.student.push(newStudent);
  setSiteData(siteData);
  console.log("sucessfully added");
}

function deleteStudent(studentName) { }

function addAssignment(assignment) { }

function deleteAssignment(assignment) { }

function getSiteData() {
  let siteData;
  if (localStorage.siteData) {
    siteData = JSON.parse(localStorage.siteData);
  } else {
    siteData = {
      students: [],
      assignments: [],
      selectedStudentName: "",
      alreadySelected: [],
      studentProgress: [],
    };
  }

  return siteData;
}

function setSiteData(siteData) {
  localStorage.siteData = JSON.stringify(siteData);
}

function loadDataExample1() {
  let dataExample1 = {
    students: [
      {
        studentName: "Alice Johnson",
        studentEmail: "alice.johnson@example.com",
      },
      {
        studentName: "Brian Smith",
        studentEmail: "brian.smith@example.com",
      },
      {
        studentName: "Caroline Davis",
        studentEmail: "caroline.davis@example.org",
      },
      {
        studentName: "Daniel Brown",
        studentEmail: "daniel.brown@example.net",
      },
      {
        studentName: "Emily Clark",
        studentEmail: "emily.clark@example.edu",
      },
    ],

    assignments: [
      "Workbook1 EX1",
      "Workbook1 EX2",
      "Workbook2 EX1",
      "Workbook2 EX2",
      "Workbook2 EX3",
    ],

    selectedStudentName: "Brian Smith",

    alreadySelected: ["Caroline Davis", "Daniel Brown"],

    studentProgress: [
      {
        studentName: "Alice Johnson",
        assignment: "Workbook1 EX1",
      },
      {
        studentName: "Alice Johnson",
        assignment: "Workbook1 EX2",
      },
      {
        studentName: "Alice Johnson",
        assignment: "Workbook2 EX1",
      },
      {
        studentName: "Daniel Brown",
        assignment: "Workbook1 EX1",
      },
      {
        studentName: "Daniel Brown",
        assignment: "Workbook1 EX2",
      },
    ],
  };

  setSiteData(dataExample1);
}
