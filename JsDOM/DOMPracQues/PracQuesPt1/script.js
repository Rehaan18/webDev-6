function clickToChange()
{
    document.getElementById("ChangeTex").innerText="Text Changed"
    console.log("Text Has been changed by click on it");
    document.getElementById("ChangeTex").innerText="The sample text that will be changed if you click on the text";
    
}   

function changeText()
{
    document.getElementById("Change").innerHTML="DOM Changed";
    console.log("The Change has been done");
   
}

function returnText()
{
    document.getElementById("Change").innerHTML="The sample text that will be changed if you click on the button bellow";
     console.log("The Change has been done");
}