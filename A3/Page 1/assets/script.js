// JAVASCRIPT COMES HERE
// --------------------------------------------------------

//FUNCTION FOR HINT BUTTON

const btn = document.getElementById("btn");
const div1 = document.getElementById("hint");

function toggleHint() { 
    if(div1.className == "closed")
    {
        div1.className = "open";
    }
    else
    {
        div1.className = "closed";
    }
}

btn.addEventListener("click", toggleHint);

const cls = document.getElementById("closebtn");

function toggleClose() { 
    div1.className = "closed";
}

cls.addEventListener("click", toggleClose);