"use strict";

const assignmentsOutputTable = document.getElementById("assignmentsOutputTable");
const addAssignmentButtton= document.getElementById("addAssignmentButtton");
const removeAssignmentButton= document.getElementById("removeAssignmentButton");
const addAssignmentModal= document.getElementById("addAssignmentModal");
const addAssignmentTextbox= document.getElementById("addAssignmentTextbox");
const setPositionNumberbox= document.getElementById("setPositionNumberbox");
const modalSaveChangesButton= document.getElementById("modalSaveChangesButton");
let canDelete = false;
window.onload = () => {
    loadDataExample1();
    //localStorage.clear();
    populateTable();
    modalSaveChangesButton.onclick = onmodalSaveChangesButtonClick;
    removeAssignmentButton.onclick = onRemoveAssignmentButtonClick; 
}



function populateTable(){
    const tbody = assignmentsOutputTable;
  
    tbody.innerHTML = '';
    getSiteData().assignments.forEach((assignment)=> {
        let assignmentNoSpace = assignment.replace(/\s/g, '');
        console.log(assignmentNoSpace);
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
function onmodalSaveChangesButtonClick(){
        const newAssignment = addAssignmentTextbox.value;
        if(newAssignment){
            // setSiteData(getSiteData().assignments.push(newAssignment));
            let modifiedSiteData = getSiteData();
            
        
         if (setPositionNumberbox.value == null
             || (setPositionNumberbox.value >= 0 && setPositionNumberbox.value < modifiedSiteData.assignments.length)){
                modifiedSiteData.assignments.splice(setPositionNumberbox.value,0,newAssignment);
             }
             else{
                modifiedSiteData.assignments.push(newAssignment);
             }
            setSiteData(modifiedSiteData);
            console.log(getSiteData().assignments);
            populateTable();
            addAssignmentTextbox.value = '';

        }
    }

    //this part isnt priniting correctly yet
    function removeLastAssignment(id){
        if(canDelete == true){
            console.log(id)
        
        let modifiedSiteData = getSiteData();
       modifiedSiteData.assignments = modifiedSiteData.assignments.filter((assignment) => assignment.replace(/\s/g, '')!==id);
        setSiteData(modifiedSiteData);
        populateTable();

        console.log(modifiedSiteData)
        }
       
        
    }
    function onRemoveAssignmentButtonClick(){
    //     //let modifiedSiteData = getSiteData();
    //    // modifiedSiteData.assignments.pop();
    //     setSiteData(modifiedSiteData)
    //     populateTable();
    canDelete = !canDelete;
    console.log("delete-mode " + canDelete)
 }