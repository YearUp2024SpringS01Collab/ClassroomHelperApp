"use strict"

//Grab the known fields from the html
const availablestudentsdropdown = document.getElementById('availableStudentsList')
const currentlySelectedStudentsTable = document.getElementById("currentlySelectedStudentsTable");
const previosulySelectedStudentsTable = document.getElementById("previosulySelectedStudentsTable");

//Grab the buttons from the html
const resetBtn = document.getElementById("reset");
const pickSelectedStudentBtn = document.getElementById("pickSelectedStudent");
const pickRandomStudentBtn = document.getElementById("pickRandomStudent");



window.onload = () => {
    populateAvailableStudents();
    populatePreviosulySelected();
    populateCurrentlySelected();
    pickSelectedStudentBtn.onclick = pickSelectedStudent;
    pickRandomStudentBtn.onclick = pickRandomStudent;

    }

resetBtn.onclick = resetData;

let siteData = getSiteData();

function resetData(){
   const tableData =  document.getElementById("tbody");
   tableData.innerHTML = "";
   const CurrentTbody = document.getElementById("CurrentTbody");
   CurrentTbody.innerHTML = "";

   availablestudentsdropdown.innerHTML = "";

   siteData.alreadySelected = [];
   console.log(siteData.alreadySelected)
   console.log(siteData.students)
   siteData.selectedStudentName = [];

   populateAvailableStudents();
}

//creates the options for availble student list,
function populateAvailableStudents() {

    let availableStudents = getStudentsAvailableForSelection();
    
    for (let studentName of availableStudents) {
        let option = document.createElement("option");
        option.textContent = studentName;
        option.value = studentName;
        availablestudentsdropdown.appendChild(option);
    }
}

//this creates function is specificaly made to create tables, it a table making template.
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

//creates table with data of preveiosuly selected students 
function populatePreviosulySelected() {
    const data = siteData.alreadySelected.map(student => [student]);
    const table = createTable(data);
    const tbody = document.createElement("tbody");
    tbody.id = "tbody"
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

//creates table with data of currently selected students.
function populateCurrentlySelected() {
    const data = siteData.selectedStudentName;
    const table = createTable(data);
    const tbody = document.createElement("tbody");
    tbody.id = "CurrentTbody"
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = siteData.selectedStudentName;
    // const removeCell = document.createElement("td");
    // const removeButton = document.createElement("button");
    // removeButton.innerHTML = "X";
    // removeButton.classList.add("btn", "btn-danger")
    // removeCell.appendChild(removeButton);
    row.appendChild(cell);
    tbody.appendChild(row);
    table.appendChild(tbody);
    currentlySelectedStudentsTable.appendChild(table);
}

function pickSelectedStudent(){
    const availablestudentsdropdown = document.getElementById('availableStudentsList');
    const selectedStudent = availablestudentsdropdown.value;
    if(selectedStudent && !siteData.selectedStudentName.includes(selectedStudent)){
        siteData.selectedStudentName.push(selectedStudent);
        setSiteData(siteData);//save changes to local storage.
        populateCurrentlySelected()
        
    }
}

function pickRandomStudent(){
    const availableStudents = getStudentsAvailableForSelection();
    const randomIndex = Math.floor(Math.random() * availableStudents.length);
    const selectedStudent = availableStudents[randomIndex];
    if(selectedStudent && !siteData.selectedStudentName.includes(selectedStudent)){
        siteData.selectedStudentName.push(selectedStudent);
        setSiteData(siteData);
        populateCurrentlySelected();
    }
}