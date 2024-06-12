"use strict";

const studentProgress = [
    { "studentName": "Alice Johnson", "assignment": "Workbook1 EX1" },
    { "studentName": "Alice Johnson", "assignment": "Workbook1 EX2" },
    { "studentName": "Alice Johnson", "assignment": "Workbook2 EX1" },
    { "studentName": "Daniel Brown", "assignment": "Workbook1 EX1" },
    { "studentName": "Daniel Brown", "assignment": "Workbook1 EX2" }
];

const students = ["Alice Johnson", "Brian Smith", "Caroline Davis", "Daniel Brown", "Emily Clark"];
const assignments = ["Workbook1 EX1", "Workbook1 EX2", "Workbook2 EX1", "Workbook1 EX4", "Workbook1 EX5"];

window.onload = populateTable;

function populateTable() {
    const tableBody = document.getElementById("tableBody");
    if (tableBody) {
        students.forEach((student, studentIndex) => {
            const row = document.createElement("tr");
            
           
            const nameCell = document.createElement("td");
            nameCell.textContent = student;
            row.appendChild(nameCell);
            
            
            assignments.forEach(assignment => {
                const cell = document.createElement("td");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `student${studentIndex + 1}-${assignment.replace(/\s+/g, "")}`;
                
                
                if (studentProgress.some(record => record.studentName === student && record.assignment === assignment)) {
                    checkbox.checked = true;
                }
                
                cell.appendChild(checkbox);
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    } else {
        console.error("Table body element not found");
    }
}

