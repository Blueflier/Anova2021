document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');

    var URL;

    checkPageButton.addEventListener('click', function() {
        chrome.tabs.query({
            active:true,
            currentWindow:true
        }, function(tabs){
            var tabURL = tabs[0].url;
            console.log(tabURL);
            setURL(tabURL);
    });
            document.getElementById("checkPage").innerHTML = URL;

    }, false);

    function setURL(url){
        URL = url;
    };

}, false);

