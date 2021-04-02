






var tabURL;

chrome.tabs.query({
    active:true,
    currentWindow:true
}, function(tabs){
    tabURL = tabs[0].url;
    
    var result = runPyScript(tabURL);
    setIcon(parseInt(result));
    console.log((result));
});

function setURL(url){
tabURL = url;
};









 function setIcon(data){
     console.log("please" + data);
    if (typeof data == 'number') {
        console.log("cheese me please its a number");
      }
    if(data>=90){
        chrome.browserAction.setIcon({path: {38:"Resized image/A.png"}});
    }
    else if(data>=80){
        chrome.browserAction.setIcon({path: {2:"Resized image/B.png"}});
    }
    else if(data>=70){
        chrome.browserAction.setIcon({path: {3:"Resized image/B.png"}});
    }
    else if(data>=60){
        chrome.browserAction.setIcon({path: {4:"Resized image/B.png"}});
    }
    else if(data>=50){
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





