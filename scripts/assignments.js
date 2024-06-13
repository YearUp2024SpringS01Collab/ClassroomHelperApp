"use strict";

const assignmentsOutputTable = document.getElementById("assignmentsOutputTable");
const addAssignmentButtton = document.getElementById("addAssignmentButtton");
const removeAssignmentButton = document.getElementById("removeAssignmentButton");
const addAssignmentModal = document.getElementById("addAssignmentModal");
const addAssignmentTextbox = document.getElementById("addAssignmentTextbox");
const setPositionNumberbox = document.getElementById("setPositionNumberbox");
const modalSaveChangesButton = document.getElementById("modalSaveChangesButton");
const deleteModeCautionMessage = document.getElementById("deleteModeCautionMessage")
let canDelete = false;
window.onload = () => {
    loadDataExample1();
    populateTable();
    modalSaveChangesButton.onclick = onmodalSaveChangesButtonClick;
    removeAssignmentButton.onclick = onRemoveAssignmentButtonClick;
}



function populateTable() {
    const tbody = assignmentsOutputTable;

    tbody.innerHTML = '';
    getSiteData().assignments.forEach((assignment) => {
        let assignmentNoSpace = assignment.replace(/\s/g, '');
        // console.log(assignmentNoSpace);
        //str = str.replace(/\s/g, '');
        const row = document.createElement('tr');
        //row.setAttribute("id",assignmentNoSpace);
        row.id = assignmentNoSpace;
        const col = document.createElement('td');
        //col.setAttribute("onclick",`removeLastAssignment('${assignmentNoSpace}')`);
        col.onclick = () => removeLastAssignment(assignmentNoSpace);

        col.textContent = assignment;
        row.appendChild(col);
        tbody.appendChild(row);
    })

}
function onmodalSaveChangesButtonClick() {
    let siteData = getSiteData();
    const newAssignment = addAssignmentTextbox.value;
    let originalAssignments = siteData.assignments;
    // console.log(originalAssignments);

    let isDuplicate = Object.values(originalAssignments).some(originalAssignments => originalAssignments.toUpperCase() === newAssignment.toUpperCase());

    if (newAssignment && !isDuplicate) {

            let modifiedSiteData = getSiteData();


            if (setPositionNumberbox.value == null
                || (setPositionNumberbox.value >= 0 && setPositionNumberbox.value < modifiedSiteData.assignments.length)) {
                modifiedSiteData.assignments.splice(setPositionNumberbox.value, 0, newAssignment);
            }
            else {
                modifiedSiteData.assignments.push(newAssignment);
            }
            setSiteData(modifiedSiteData);
            // console.log(getSiteData().assignments);
            populateTable();
            addAssignmentTextbox.value = '';

        } else {
            window.alert("Please enter a non duplicate assignment name!")
        }
    }

//this part isnt priniting correctly yet
function removeLastAssignment(id) {
    if (canDelete == true) {
        console.log(id)

        let modifiedSiteData = getSiteData();
        console.log(modifiedSiteData)
        modifiedSiteData.assignments = modifiedSiteData.
            assignments.filter((assignment) => assignment.replace(/\s/g, '') !== id);
        setSiteData(modifiedSiteData);
        populateTable();

        console.log(modifiedSiteData)
    }


    }
let count = 0;

function onRemoveAssignmentButtonClick() {
    //     //let modifiedSiteData = getSiteData();
    //    // modifiedSiteData.assignments.pop();
    //     setSiteData(modifiedSiteData)
    //     populateTable();
    canDelete = !canDelete;

    count ++
    console.log(count);

    if(count %2 == 0){
        deleteModeCautionMessage.innerHTML = "";
} else {
    deleteModeCautionMessage.innerHTML = "CAUTION!  YOU ARE IN A DELETE MODE!"
    
}
    console.log("delete-mode " + canDelete)
}