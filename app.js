// Problem 2
function clickhere(){
alert(`Thanks for purcasting Phone From us`);
}
// Problem 3
function del(){
let deleteButtons = document.querySelectorAll(".deleteBtn");

for(let i = 0; i < deleteButtons.length; i++){

    deleteButtons[i].addEventListener("click", function(){

        let row = this.parentElement.parentElement;

        row.remove();

    });

}
}

// Probelem  4
function showBefore() {
    document.getElementById("photo").src = "./images/exit.webp";
}

function showAfter() {
    document.getElementById("photo").src = "./images/enter.webp";
}

// Problem  5
let count = 0;

function increase() {
    count = count + 1;
    document.getElementById("counter").innerText = count;
}

function decrease() {
    count = count - 1;
    document.getElementById("counter").innerText = count;
Id("Counter").innerHTML = count;
}