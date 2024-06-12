"use strict"
const availablestudentsdropdown = document.getElementById('availableStudentsList')
const currentlySelectedStudentsTable = document.getElementById("currentlySelectedStudentsTable");
const previosulySelectedStudentsTable = document.getElementById("previosulySelectedStudentsTable");



window.onload = () => {
    populateAvailableStudents();
    populatePreviosulySelected();
}


function populateAvailableStudents() {
    let siteData = getSiteData();
    console.log(siteData)
    let availableStudents = [];

    for (let student of siteData.students) {
        let studentName = student.studentName;
        if (!siteData.alreadySelected.includes(studentName) && !siteData.selectedStudentName.includes(studentName)) {
            availableStudents.push(studentName);
        }
        //   console.log(availableStudents)
    }
    for (let studentName of availableStudents) {
        let option = document.createElement("option");
        option.textContent = studentName;
        option.value = studentName;
        availablestudentsdropdown.appendChild(option);
    }
}

function populatePreviosulySelected() {
    let siteData = getSiteData();
    const table = document.createElement("table");
    table.id = "previousStudentTable";
    table.className = "table table-striped table-hover border";
    const thead = document.createElement("thead");
    thead.className = "table-dark";
    const tbody = document.createElement("tbody");
    tbody.className = "table-group-divider";

    const headerRow = document.createElement("tr");
    ["Name"].forEach(text => {
        const header = document.createElement("th");
        header.textContent = text;
        headerRow.appendChild(header);
    })
    thead.appendChild(headerRow);
    table.appendChild(thead);
    siteData.alreadySelected.forEach(student => {
        const row = document.createElement("tr");
        row.appendChild(createCell(student))
    tbody.appendChild(row);
    })
    table.appendChild(tbody);
    previosulySelectedStudentsTable.appendChild(table);
}

function createCell(value){
    const cell = document.createElement("td");
    cell.textContent = value;
    return cell;
}

function populateCurrentlySelected(){
    let siteData = getSiteData();
    const table = document.createElement("table");
    table.id = "previousStudentTable";
    table.className = "table table-striped table-hover border";
    const thead = document.createElement("thead");
    thead.className = "table-dark";
    const tbody = document.createElement("tbody");
    tbody.className = "table-group-divider";

    const headerRow = document.createElement("tr");
    ["Name"].forEach(text => {
        const header = document.createElement("th");
        header.textContent = text;
        headerRow.appendChild(header);
    })
    thead.appendChild(headerRow);
    table.appendChild(thead);
    siteData.selectedStudentName.forEach(student => {
        const row = document.createElement("tr");
        row.appendChild(createCell(student))
    tbody.appendChild(row);
    })
    table.appendChild(tbody);
    
}