// JAVASCRIPT COMES HERE
// --------------------------------------------------------

const radiobtns = document.getElementsByName("radiobuttons");
const div1 = document.getElementById("div-1");

var i;

for(i=0; i<radiobtns.length; i++) { 
    radiobtns[i].addEventListener("click", function () {
        div1.style.backgroundColor = this.value;
    });
}