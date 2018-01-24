"use strict"
////注释注释注释
alert("hello");
/* JS多行注释 */
var mood = 'happy don\'t ask \"me';
var age = -25.255555555555;
var married = true;
var she = Array(3);
she[0] = "s";
she[1] = "h";
she[2] = "e";
she[6] = "2wq";
var year = [1,2,3,4];
var me = ["wyq", 25, true];
var qtec = Array();
qtec["laoda"] = me;
alert(qtec["laoda"][0]);
function showArray(tempArray)
{
    console.log("showArray " + tempArray.length);
    for(var count = 0; count < tempArray.length; count++)
    {
        alert(tempArray[count]);
    }
}
//showArray(mood);

function convertToCelsius(temp)
{
    var result = temp - 32;
    result = result / 1.8;
    return result;
}
var temp_fahrenheit = 95;
var temp_celsius = convertToCelsius(temp_fahrenheit);
alert("celsius is " + temp_celsius);

function variableTest()
{
    alert(age);
}
variableTest();