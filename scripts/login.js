function fto(){
    var passcode = "V201U2RrNUhlRFZhYlZVOQ==";
    var ftoForm = document.getElementById("fto-login");
    var textareaList = ftoForm.getElementsByTagName("input");
    var textareaText = textareaList[0].value;
    //check password
    var password = textareaText;
    for(var i = 0; i < 3; i++)
    {
        password = window.btoa(password);
    }
    //set cookie
    if(passcode == password)
    {
        var d = new Date();
        var cname = "fto";
        var cvalue = "true";
        d.setTime(d.getTime() + (10*365*24*60*60)); //10 years in future
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        window.alert("Signed in as FTO");
        console.log("fto");
    }
}

function command(){
    var passcode = "V1RJNWRHSlhSblZhUnpnOQ==";
    var commandForm = document.getElementById("command-login");
    var textareaList = commandForm.getElementsByTagName("input");
    var textareaText = textareaList[0].value;

    var password = textareaText;
    //check password
    for(var i = 0; i < 3; i++)
    {
        password = window.btoa(password);
    }
    //set cookie
    if(passcode == password)
    {
        var d = new Date();
        var cname = "command";
        var cvalue = "true";
        d.setTime(d.getTime() + (20*365*24*60*60)); //10 years in future
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        window.alert("Signed in as Command");
    }
}