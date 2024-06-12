"use strict";

window.onload = () => {
    displayLatestSiteData();

    const loadDataExample1Button = document.getElementById("loadDataExample1Button");
    loadDataExample1Button.onclick = onLoadDataExample1ButtonClick;


    const studentsListLoad = document.getElementById("studentsListLoad");
    studentsListLoad.onclick = onStudentsListLoadButtonClick;
};




function displayLatestSiteData(){
    const fulldata = document.getElementById("fulldata");
    let siteData = getSiteData();
    if(siteData){
            fulldata.value = JSON.stringify(siteData,null,2);
    }

}


function onLoadDataExample1ButtonClick(){
    loadDataExample1();
    displayLatestSiteData();
}




function onStudentsListLoadButtonClick(){
    const studentsList = document.getElementById("studentsList");
    studentsList.innerHTML = "";

    let siteData = getSiteData();

    for(let student of siteData.students){
        //studentsList.appendChild(new Option(student.studentName, student.studentName));

        let newOption = document.createElement("option");
        newOption.value = student.studentName;
        newOption.innerHTML = student.studentName;

        studentsList.appendChild(newOption);
    }
}

