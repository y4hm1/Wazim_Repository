// JAVASCRIPT COMES HERE
// --------------------------------------------------------

const div3 = document.getElementById("div-3");

// FUNCTION FOR BUTTON 1

const div1 = document.getElementById("div-1");

function toggleDiv1() {
    if (div1.className == "closed")
    {
    div1.className = "open";
    }
    else
    {
    div1.className = "closed";
    }
}

//FUNCTION FOR BUTTON 2

const div2 = document.getElementById("div-2");
const btn2 = document.getElementById("btn2");
const body = document.querySelector("body");


function toggleDiv2() {
    if (div2.className == "closed")
    {
        div2.className = "open";
    }
    else
    {
        div2.className = "closed";
    }
}




btn2.addEventListener("click" ,toggleDiv2);
div2.addEventListener("load", toggleDiv2());



//FUNCTION FOR CLOSE BUTTONS

const closebtn = document.getElementsByClassName("closemenu");
var i;


for(i = 0 ; i < closebtn.length ; i++)
{
    closebtn[i].addEventListener("click", function () {
        this.parentElement.className = "closed";
    });
}