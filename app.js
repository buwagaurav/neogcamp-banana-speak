// After Button creation need to get the reference of that bubtton from html to js.
//using document.querySelector

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "Gaurav Buwa"

console.log(txtInput);

function clickHandler() {
    // console.log("clicked!");
    // console.log(txtInput.value);
    // console.log

    outputDiv.innerText = "ajsjsjsjsjsjsj  " + txtInput.value;
}

// console.log(btnTranslate);
// btnTranslate.addEventListener("click", function clickEventHandler(){
//     console.log("Clicked");
// })


btnTranslate.addEventListener("click", clickHandler)
