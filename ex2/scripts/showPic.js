function showPic(whichpic)
{
    //alert("showPic");
    var source = whichpic.getAttribute("href");
    console.log("href is " + source);
    if(!document.getElementById("placeholder")) return true;
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return true;
    console.log("placeholder is " + placeholder);
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title"):"";
    //alert(text);
    if(!document.getElementById("description")) return false;
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text; 
    //alert(text);
    return false;
    //alert(description.nodeValue);
    //alert(description.childNodes[0].nodeValue);
    //alert(description.firstChild.nodeValue);
}
function countBodyChildren()
{
    var body_element = document.getElementsByTagName("body")[0];
    alert("nodeLength is " +body_element.childNodes.length);
    //alert("nodeType is " + body_element.nodeType);
}
function popUp(winURL)
{
    window.open(winURL,"popup","width=320,height=480");
}

function prepareLinks()
{
    var links = document.getElementsByTagName("a");
    for(var i=0; i<links.length; i++)
    {
        if(links[i].getAttribute("class") == "popup")
        {
            links[i].onclick = function()
            {
                alert(this.getAttribute("href"));
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function prepareGallery()
{
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0; i<links.length; i++)
    {
        links[i].onclick = function()
        {
            return showPic(this);
            //return false;
        }
        //links[i].onkeypress = links[i].onclick;
    }
}

function addLoadEvent(func)
{
    var oldonload = window.onload;
    if(typeof window.onload != 'function')
    {
        window.onload = func;
    }
    else
    {
        window.onload = function()
        {
            oldonload();
            func();
        }
    }
}
//window.onload = prepareLinks;
//window.onload = prepareGallery;
window.onload = function()
{
    prepareLinks();
    prepareGallery();
}