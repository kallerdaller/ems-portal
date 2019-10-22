function getCookie(cname)
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(";");
    for(var i = 0; i < ca.length; i++) 
    {
        var c = ca[i];
        while(c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length)
        }
    }
    return "";
}

function checkLoad() 
{
    var fto = getCookie("fto");
    if(fto != "")
    {
        window.alert("heyo fto");
        fto = True;
    }
    var command = getCookie("command");
    if(command !="")
    {
        window.alert("heyo command");
        command = true;
    }
    //if not command & not fto, del boxes
}