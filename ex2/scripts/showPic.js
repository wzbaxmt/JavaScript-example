function showPic(whichpic)
{
    //alert("showPic");
    var source = whichpic.getAttribute("href");
    console.log("href is " + source);
    var placeholder = document.getElementById("placeholder");
    console.log("placeholder is " + placeholder);
    placeholder.setAttribute("src",source);
}