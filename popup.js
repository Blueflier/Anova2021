document.addEventListener('DOMContentLoaded', function() {
    
    // var inter = window.setInterval(function(){
    //     console.log("every 2 seoncds");

    // },3000)

    chrome.browserAction.setIcon({path: {19:"images/icon.png"}});

    var checkPageButton = document.getElementById('checkPage');


    checkPageButton.addEventListener('click', function() {

        
    var URL;
    chrome.tabs.query({
        active:true,
        currentWindow:true
    }, function(tabs){
        var tabURL = tabs[0].url;
        console.log(tabURL);
        //setURL(tabURL);
        document.getElementById("checkPage").innerHTML = URL;

    chrome.browserAction.setIcon({path: {19:"images/ALogo-38.png"}});

    });

}, false);

    
   
    // function setURL(url){
    //     URL = url;
    // };
}, false);

// function isTabChanged(){
//     if(id!=previous id){
//         return true;
//     }
// };