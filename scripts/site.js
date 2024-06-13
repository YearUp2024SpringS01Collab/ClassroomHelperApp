"use strict";


function selectStudent(studentName){
    
}



function addStudent(studentName, studentEmail){

}

function deleteStudent(studentName){

}

function addAssignment(assignment){

}

function deleteAssignment(assignment){

}

function getSiteData(){
    let siteData;
    if(localStorage.siteData){
          siteData = JSON.parse(localStorage.siteData)
    }
    else{
        siteData = {
            "students": [],
            "assignments":[],
            "selectedStudentName": "",
            "alreadySelected" : [],
            "studentProgress": []
        };
    }
  
    return siteData;
}

function setSiteData(siteData){
    localStorage.siteData = JSON.stringify(siteData);
}

function loadDataExample1(){
    let dataExample1 = {
        "students": [
            {
              "studentName": "Alice Johnson",
              "studentEmail": "alice.johnson@example.com"
            },
            {
              "studentName": "Brian Smith",
              "studentEmail": "brian.smith@example.com"
            },
            {
              "studentName": "Caroline Davis",
              "studentEmail": "caroline.davis@example.org"
            },
            {
              "studentName": "Daniel Brown",
              "studentEmail": "daniel.brown@example.net"
            },
            {
              "studentName": "Emily Clark",
              "studentEmail": "emily.clark@example.edu"
            }
          ],
    
        "assignments":
        [
            "Workbook1 EX1", "Workbook1 EX2", "Workbook2 EX1", "Workbook2 EX2", "Workbook2 EX3" 
        ],
        
        "selectedStudentName": "Brian Smith",
    
        "alreadySelected" : [
            "Caroline Davis",
            "Daniel Brown"
        ],
    
        "studentProgress": [
            {
                "studentName": "Alice Johnson",
                "assignment" : "Workbook1 EX1"
            },        
            {
                "studentName": "Alice Johnson",
                "assignment" : "Workbook1 EX2"
            },        
            {
                "studentName": "Alice Johnson",
                "assignment" : "Workbook2 EX1"
            },
            {
                "studentName": "Daniel Brown",
                "assignment" : "Workbook1 EX1"
            },
            {
                "studentName": "Daniel Brown",
                "assignment" : "Workbook1 EX2"
            }
        ]
    
    
    };

    setSiteData(dataExample1);
}