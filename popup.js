document.addEventListener('DOMContentLoaded', function() {
    
    var URL;
    chrome.tabs.query({
        active:true,
        currentWindow:true
    }, function(tabs){
        var tabURL = tabs[0].url;
        console.log(tabURL);
        setURL(tabURL);
        document.getElementById("checkPage").innerHTML = URL;
});

    
   
    function setURL(url){
        URL = url;
    };
}, false);
