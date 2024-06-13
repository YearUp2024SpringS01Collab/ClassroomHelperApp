"use strict";

window.onload = function () {
  loadDataExample1()
  let siteData = getSiteData();
  loadFormFromData(siteData);

};


// creates table rows for each student and their progress on assignments 
function tableRows(students, assignments, studentProgress) {
  students.forEach((student) => {
    const row = document.createElement("tr");

    // student name
    const nameCell = document.createElement("td");
    nameCell.textContent = student.studentName;
    row.appendChild(nameCell);

    // assignment checkboxes
    assignments.forEach((assignment) => {
      const cell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      // it checks to see if the student has completed the assignment 
      if(assignmentCompleted(student.studentName,assignment,studentProgress)){
        checkbox.checked = true
      }
      cell.appendChild(checkbox);
      row.appendChild(cell);
    })

    const tableBody = document.getElementById("tableBody");

    tableBody.appendChild(row);
  })
}

// checks if a student has completed a specific assignment 
function assignmentCompleted(studentName, assignmentName, studentProgress) {
  // it uses the .some method to check if there are any matches to the record 
return studentProgress.some(
    (record) =>
      
      record.studentName === studentName && record.assignment === assignmentName
     )
}

// it seperates the data we need from the siteData, so we use in tableRows function
function loadFormFromData(data) {
  console.log(data);
  const students = data.students;
  const assignmentName = data.assignments;
  const studentProgress = data.studentProgress;

tableRows(students,assignmentName,studentProgress)
};

