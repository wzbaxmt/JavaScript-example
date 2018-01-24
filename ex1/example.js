"use strict"
////注释注释注释
alert("hello");
/* JS多行注释 */
var mood = 'happy don\'t ask \"me';
var age = 25.55555555555;
//内建对象
var age = Math.round(age);
alert(age);
var currentDate = new Date();
var today = currentDate.getDay();
alert("today is " + today);
//二维数组
var me = ["wyq", 25, true];
var qtec = new Array();
qtec["laoda"] = me;
alert(qtec["laoda"][0]);
//函数调用
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
    age = 18;
    alert(age);
}
variableTest();