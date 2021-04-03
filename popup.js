//chrome.tabs.onActivated.addListener(mainCode());

var tabURL;
//mainCode();
//function mainCode(){
    //console.log("in main code");
    chrome.tabs.query({
        active:true,
        currentWindow:true
    }, function(tabs){
        tabURL = tabs[0].url;
        var result = runPyScript(tabURL);
        setIcon(parseInt(result));
    });
//}

function setURL(url){
tabURL = url;
};


function setIcon(data){

    if(data>=90){ //.gov
        chrome.browserAction.setIcon({tabId: tab.id, path: {38:"images/A.png"}});
    }
    else if(data>=80){ //edu
        chrome.browserAction.setIcon({path: {38:"images/B.png"}});
    }
    else if(data>=70){ //org
        chrome.browserAction.setIcon({path: {38:"images/C.png"}});
    }
    else if(data>=60){ //us
        chrome.browserAction.setIcon({path: {38:"images/D.png"}});
    }
    else if(data>=50){ //com
        chrome.browserAction.setIcon({path: {38:"images/F.png"}});
    }
    else{
        chrome.browserAction.setIcon({path: {38:"images/Default.png"}});
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var checkPageButton = document.getElementById('moreInfo');

    checkPageButton.addEventListener('click', function() {
        window.open("https://www.w3schools.com");

}, false);
  
}, false);





