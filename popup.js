

var tabURL = undefined;

//input tabURL into python code

function setIcon(score){
    if(score>=90){
        chrome.browserAction.setIcon({path: {1:"Resized image/A.png"}});
    }
    else if(score>=80){
        chrome.browserAction.setIcon({path: {2:"Resized image/B.png"}});
    }
    else if(score>=70){
        chrome.browserAction.setIcon({path: {3:"Resized image/B.png"}});
    }
    else if(score>=60){
        chrome.browserAction.setIcon({path: {4:"Resized image/B.png"}});
    }
    else if(score>=50){
        chrome.browserAction.setIcon({path: {5:"Resized image/B.png"}});
    }
    else{
        chrome.browserAction.setIcon({path: {6:"Resized image/Default.png"}});
    }
}












document.addEventListener('DOMContentLoaded', function() {
   

    //chrome.browserAction.setIcon({path: {128:"images/icon.png"}});

    var checkPageButton = document.getElementById('moreInfo');
    

    checkPageButton.addEventListener('click', function() {
        window.open("https://www.w3schools.com");
        


}, false);

    
   
    
}, false);




// chrome.tabs.query({
//     active:true,
//     currentWindow:true
// }, function(tabs){
//     var tabURL = tabs[0].url;
// });

// function setURL(url){
//     URL = url;
// };
