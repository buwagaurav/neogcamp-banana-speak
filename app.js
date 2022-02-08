// After Button creation need to get the reference of that bubtton from html to js.
//using document.querySelector

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "Gaurav Buwa"
var requestURL = "https://api.funtranslations.com/translate/dothraki.json";

function newURL(text){
    return requestURL+"?" + "text=" + text;
}

//console.log(txtInput);

function errorHandler(error){
    console.log("Error occured :", error);
    alert("An error has occured, please refresh or try again after sometime if the problem persists.");
}

function clickHandler() {
    // console.log("clicked!");
    // console.log(txtInput.value);
    // console.log
    var inputText = txtInput.value;
    fetch(newURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
    //outputDiv.innerText = "ajsjsjsjsjsjsj  " + txtInput.value;
}

// console.log(btnTranslate);
// btnTranslate.addEventListener("click", function clickEventHandler(){
//     console.log("Clicked");
// })


btnTranslate.addEventListener("click", clickHandler);
