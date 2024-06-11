"use strict";

window.onload = () => {
    displayLatestSiteData();

    const loadDataExample1Button = document.getElementById("loadDataExample1Button");
    loadDataExample1Button.onclick = onLoadDataExample1ButtonClick;
};




function displayLatestSiteData(){
    const fulldata = document.getElementById("fulldata");
    let siteData = getSiteData();
    if(siteData){
            fulldata.value = JSON.stringify(siteData,null, 2);
    }

}


function onLoadDataExample1ButtonClick(){
    loadDataExample1();
    displayLatestSiteData();
}