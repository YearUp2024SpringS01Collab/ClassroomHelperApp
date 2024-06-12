"use strict";

const assignmentsOutputTable = document.getElementById("assignmentsOutputTable");
const addAssignmentButtton= document.getElementById("addAssignmentButtton");
const removeAssignmentButton= document.getElementById("removeAssignmentButton");
const addAssignmentModal= document.getElementById("addAssignmentModal");
const addAssignmentTextbox= document.getElementById("addAssignmentTextbox");
const setPositionNumberbox= document.getElementById("setPositionNumberbox");
const modalSaveChangesButton= document.getElementById("modalSaveChangesButton");

window.onload = () => {
    loadDataExample1();
    //localStorage.clear();
    populateTable();
    modalSaveChangesButton.onclick = onmodalSaveChangesButtonClick;
}



function populateTable(){
    const tbody = assignmentsOutputTable;
  
    tbody.innerHTML = '';
    getSiteData().assignments.forEach((assignment)=> {
        let assignmentNoSpace = assignment.replace(/\s/g, '');
        console.log(assignmentNoSpace);
        //str = str.replace(/\s/g, '');
       const row = document.createElement('tr');
       row.setAttribute("id",assignmentNoSpace);
       const col = document.createElement('td');
       col.setAttribute("onclick",`removeLastAssignment(${assignmentNoSpace})`);
       col.textContent = assignment;
       row.appendChild(col);
       tbody.appendChild(row);
    })
    
}
function onmodalSaveChangesButtonClick(){
        const newAssignment = addAssignmentTextbox.value;
        if(newAssignment){
            // setSiteData(getSiteData().assignments.push(newAssignment));
            let modifiedSiteData = getSiteData();
            modifiedSiteData.assignments.push(newAssignment);
            setSiteData(modifiedSiteData);
            console.log(getSiteData().assignments);
            populateTable();
            addAssignmentTextbox.value = '';
        }
    }

    //this part isnt priniting correctly yet
    function removeLastAssignment(id){
        let modifiedSiteData = getSiteData();
        modifiedSiteData.assignments = modifiedSiteData.assignments.filer(assignment => assignment.replace(/\s/g, '')!==id);
        console.log(id);

    }