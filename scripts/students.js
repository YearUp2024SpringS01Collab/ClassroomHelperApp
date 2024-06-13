"use strict";
// we want to populate the drop dowm //

console.log("We are connected");

// fields

const viewAll = document.getElementById("viewall");

const productsTable = document.getElementById("productsTable");

// const addSingleStudent = document.getElementById("add-single-student");

// buttons
const addStudentBtn = document.getElementById("add-student-btn");

window.onload = function () {
  let siteData = getSiteData();
  //   console.log(siteData);
  populateStudentOptions(siteData); //populate the dropdown

  document
    .getElementById("view-options")
    .addEventListener("change", function () {
      const selectedName = this.value;
      displayStudentInfo(siteData, selectedName);
    });
};

function populateStudentOptions(siteData) {
  const students = siteData.students;
  const viewOptions = document.getElementById("view-options");
  viewOptions.innerHTML = "";
  // console.log(students);
  // default option
  const selectOneOption = document.createElement("option");
  selectOneOption.value = "";
  selectOneOption.text = "select One please";
  viewOptions.appendChild(selectOneOption);

  const viewAllOption = document.createElement("option");
  viewAllOption.value = "View All";
  viewAllOption.text = "View All";
  viewOptions.appendChild(viewAllOption);

  students.forEach((student) => {
    const option = document.createElement("option");
    option.value = student.studentName;
    option.text = student.studentName;
    viewOptions.appendChild(option);
  });
}
// function to display all of the studens

function displayAllStudents(siteData) {
  const students = siteData.students;
  const studentList = document.getElementById("student-List");
  studentList.innerHTML = "";

  students.forEach((student) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.innerHTML = student.studentName;

    const emailCell = document.createElement("td");
    emailCell.innerHTML = student.studentEmail;

    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "X";
    removeButton.classList.add("btn", "btn-danger");
    removeButton.onclick = function () {
      removeStudentFromLocalStorage(student.studentName);
      populateStudentOptions(getSiteData());
      displayAllStudents(getSiteData());
    };
    removeCell.appendChild(removeButton);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(removeCell);

    studentList.appendChild(row);
  });
}

//  function to display selected student email and name in table
function displayStudentInfo(siteData, selectedName) {
  const students = siteData.students;

  const studentList = document.getElementById("student-List");

  studentList.innerHTML = "";

  if (selectedName === "View All") {
    displayAllStudents(siteData);
  } else {
    const selectedStudent = students.find(
      (student) => student.studentName === selectedName
    );
    if (selectedStudent) {
      //Creates the the table row
      const row = document.createElement("tr");

      //creates the tabel cell for student name
      const nameCell = document.createElement("td");
      nameCell.innerHTML = selectedStudent.studentName;

      //creates the tabel cell for student email
      const emailCell = document.createElement("td");
      emailCell.innerHTML = selectedStudent.studentEmail;

      //creates the table cell for the button
      const removeCell = document.createElement("td");
      const removeButton = document.createElement("button");
      removeButton.innerHTML = "X";
      removeButton.classList.add("btn", "btn-danger");

      //creates the onclick function so when the user clicks "View All" the table with the selected student is created.
      removeButton.addEventListener("click", function () {
        removeStudentFromLocalStorage(selectedName);
        let updatedSiteData = getSiteData();
        populateStudentOptions(updatedSiteData);
        displayStudentInfo(updatedSiteData, "Select One");
      });

      removeCell.appendChild(removeButton);

      row.appendChild(removeCell);
      row.appendChild(nameCell);
      row.appendChild(emailCell);

      studentList.appendChild(row);
    }
  }
}

// function to remove to students from local storage

function removeStudentFromLocalStorage(selectedName) {
  let siteData = getSiteData();
  // filter out the student
  siteData.students = siteData.students.filter(
    (student) => student.studentName !== selectedName
  );
  localStorage.setItem("siteData", JSON.stringify(siteData));
}
