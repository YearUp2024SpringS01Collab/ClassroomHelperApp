"use strict";

window.onload = function () {
//   let siteData = getSiteData();
//   loadFormFromData(siteData);
};

function loadFormFromData(data) {
  const students = data.students;
  const assignmentName = data.assignmentName;
  const studentProgress = data.studentProgress;

  const tableBody = document.getElementById("tableBody");
  if (tableBody) {
    students.forEach((student) => {
      const row = document.createElement("tr");

      // student name
      const nameCell = document.createElement("td");
      nameCell.textContent = student.studentName;
      row.appendChild(nameCell);

      // assignment checkboxes
      assignmentName.forEach((assignment) => {
        const cell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // completed this assignment

        if (
          studentProgress.some(
            (record) =>
              record.studentName === student.studentName &&
              record.assignmentName === assignmentName
          )
        ) {
          checkbox.checked = true;
        }

        cell.appendChild(checkbox);
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });
  }
}
