

var tabURL;

// When a new tab is created, get its url and set the icon based on its score
chrome.tabs.onCreated.addListener(function callback(tab) {
    var result = runPyScript(tab.url);
    setIcon(result);
});

// When a new url is loaded into the tab, get the new url and set the icon based
// on its score
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var result = runPyScript(changeInfo.url);
    if (!(result == "no_change")) {
      setIcon(result);
    }
});


// When the user switches to a different tab, get the new url and set the icon 
// based on the score
chrome.tabs.onActivated.addListener(function( activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab){
       var result = runPyScript(tab.url);
       if (!(result == "no_change")) {
         setIcon(result);
       }
    });
});



function setURL(url){
  tabURL = url;
};

function runPyScript(input){
    var jqXHR = $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/login",
        async: false,
        data: { mydata: input },
        crossDomain: true
    });

    return jqXHR.responseText;
}

function setIcon(data){

    if(data>=90){ //.gov
        chrome.browserAction.setIcon({path: {38:"images/A.png"}});
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
        console.log('ran okay')
    }
}

// document.addEventListener('DOMContentLoaded', function() {

    // var checkPageButton = document.getElementById('moreInfo');

    // checkPageButton.addEventListener('click', function() {
        // window.open("https://www.w3schools.com");

// }, false);

// }, false);
