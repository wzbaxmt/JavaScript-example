function showPic(whichpic)
{
    //alert("showPic");
    var source = whichpic.getAttribute("href");
    console.log("href is " + source);
    var placeholder = document.getElementById("placeholder");
    console.log("placeholder is " + placeholder);
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    //alert(text);
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
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
window.onload = prepareLinks;
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