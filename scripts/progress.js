"use strict";

window.onload = function() {
    let siteData = getSiteData();
    loadFormFromData(siteData);
};

function loadFormFromData(data) {
    const students = data.students;
    const assignments = data.assignments;
    const studentProgress = data.studentProgress;
    
    const tableBody = document.getElementById("tableBody");
    if (tableBody) {
        students.forEach(student => {
            const row = document.createElement("tr");
            
            // student name 
            const nameCell = document.createElement("td");
            nameCell.textContent = student.studentName;
            row.appendChild(nameCell);
            
            // assignment checkboxes
            assignments.forEach(assignment => {
                const cell = document.createElement("td");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                
                // completed this assignment
                if (studentProgress.some(record => record.studentName === student.studentName && record.assignment === assignment)) {
                    checkbox.checked = true;
                }
                
                cell.appendChild(checkbox);
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    }
}

