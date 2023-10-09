// JAVASCRIPT COMES HERE
// --------------------------------------------------------
function textInput() {
    document.getElementById("output-box1").innerHTML = document.getElementById("text-input").value;
}
function numberInput() {
    document.getElementById("output-box2").style.fontSize = document.getElementById("number-input").value + "px";
}
function sliderInput() {
    document.getElementById("output-box3").style.borderWidth = document.getElementById("slider-input").value + "px";
}
function radioInput1() {
    document.getElementById("output-box4").style.backgroundColor = document.getElementById("rdi1").value;
}
function radioInput2() {
    document.getElementById("output-box4").style.backgroundColor = document.getElementById("rdi2").value;

}
function radioInput3() {
    document.getElementById("output-box4").style.backgroundColor = document.getElementById("rdi3").value;
}
function radioInput4() {
    document.getElementById("output-box4").style.backgroundColor = document.getElementById("rdi4").value;
}
function dropDownInput() {
    document.getElementById("image").src = document.getElementById("drop-down-input").value;
}