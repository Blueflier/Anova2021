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

console.log("okay");
datatosend = 'this is my matrix';
result = runPyScript(datatosend);
console.log('Got back ' + result);
