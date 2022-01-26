// var btn = document.querySelector("#btn");

// btn.document.addEventListener('click', () => {
var myVar = setInterval(function() {
    myTimer();
}, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}