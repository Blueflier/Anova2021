document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');

    checkPageButton.addEventListener('click', function() {
        chrome.tabs.query({
            active:true,
            currentWindow:true
        }, function(tabs){
            var tabURL = tabs[0].url;
            console.log(tabURL);
    });
            document.getElementById("checkPage").innerHTML = "Inspect the Extension";

    }, false);

}, false);

