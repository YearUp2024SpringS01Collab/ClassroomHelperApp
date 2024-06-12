"use strict";


// we want to populate the drop dowm //

console.log("We are connected");


// fields

const viewAll = document.getElementById("viewall");

const productsTable = document.getElementById("productsTable");

const addSingleStudent = document.getElementById("add-single-student");


// buttons
const addStudentBtn = document.getElementById("add-student-btn");


window.onload = function () {
    let siteData = getSiteData();
    console.log(siteData);
    populateStudentOptions (siteData);
}

function populateStudentOptions (siteData) {
    const students = siteData.students;
    const viewOptions = document.getElementById("view-options");
    viewOptions.innerHTML="";
    // console.log(students);
// default option
const selectOneOption = document.createElement("option");
selectOneOption.value = "";
selectOneOption.text = "select One please";
viewOptions.appendChild(selectOneOption);

const viewAllOption = document.createElement("option");
viewAllOption.value = "";
viewAllOption.text = "View All";
viewOptions.appendChild(viewAllOption);
 

students.forEach(student =>{ 
    const option = document.createElement("option");
    option.value = student.studentName;
    option.text = student.studentName;
    viewOptions.appendChild (option);
} )
 }
// function to display all of the studens 

function displayAllStudents(siteData){
    const students = siteData.students;
    const studentList = document.getElementById("student-List");
    studentList.innerHTML="";

    students.forEach(student =>{
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.innerHTML = student.studentName;
        
        const emailCell =document.createElement("td");
        emailCell.innerHTML = student.studentEmail;
        
        const removeCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "X";
        removeButton.classList.add("btn", "btn-danger");
        removeButton.onclick = function(){
            populateStudentOptions(getSiteData());
            displayAllStudents(getSiteData());


        }
        removeCell.appendChild(removeButton);
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(removeCell);

        studentList.appendChild(row);

    })

}

