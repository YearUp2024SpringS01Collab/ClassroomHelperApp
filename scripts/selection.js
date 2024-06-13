"use strict"
const availablestudentsdropdown = document.getElementById('availableStudentsList')
const currentlySelectedStudentsTable = document.getElementById("currentlySelectedStudentsTable");
const previosulySelectedStudentsTable = document.getElementById("previosulySelectedStudentsTable");



window.onload = () => {
    populateAvailableStudents();
    populatePreviosulySelected();
    populateCurrentlySelected();
}

let siteData = getSiteData();

function populateAvailableStudents() {

    let availableStudents = getStudentsAvailableForSelection();
    
    for (let studentName of availableStudents) {
        let option = document.createElement("option");
        option.textContent = studentName;
        option.value = studentName;
        availablestudentsdropdown.appendChild(option);
    }
    
}

function createTable(data) {
    const table = document.createElement("table");
    table.className = "table table-striped table-hover border";

    const thead = document.createElement("thead");
    thead.className = "table-dark";
    const headerRow = document.createElement("tr");
    ["Name"].forEach(text => {
        const header = document.createElement("th");
        header.textContent = text;
        headerRow.appendChild(header);
    });
    thead.appendChild(headerRow);

    table.appendChild(thead);
    
    return table;
}

function populatePreviosulySelected() {
    const data = siteData.alreadySelected.map(student => [student]);
    const table = createTable(data);
    const tbody = document.createElement("tbody");
    data.forEach(rowData => {
        const row = document.createElement("tr");
        rowData.forEach(cellData => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
    tbody.className = "table-group-divider";
    table.appendChild(tbody);

    previosulySelectedStudentsTable.appendChild(table);
}

function populateCurrentlySelected() {
    const data = siteData.selectedStudentName;
    const table = createTable(data);
    const tbody = document.createElement("tbody");
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = siteData.selectedStudentName;
    row.appendChild(cell);
    tbody.appendChild(row);
    table.appendChild(tbody);
    currentlySelectedStudentsTable.appendChild(table);
}