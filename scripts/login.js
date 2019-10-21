function fto(){
    var passcode = "V201U2RrNUhlRFZhYlZVOQ==";
    var ftoForm = document.getElementById("fto-login");
    var textareaList = ftoForm.getElementsByTagName("input");
    var textareaText = textareaList[0].value;
    
    var password = textareaText;
    for(var i = 0; i < 3; i++)
    {
        password = window.btoa(password);
    }
    console.log(password);
}

function command(){
    var passcode = "V1RJNWRHSlhSblZhUnpnOQ==";
    var commandForm = document.getElementById("command-login");
    var textareaList = commandForm.getElementsByTagName("input");
    var textareaText = textareaList[0].value;
    var password = textareaText;
    for(var i = 0; i < 3; i++)
    {
        password = window.btoa(password);
    }
    console.log(password);
}