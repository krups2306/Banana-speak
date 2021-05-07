var btnTranslate = document.querySelector("#btn-translate");  //button
var textInput = document.querySelector("#txt-input");  //input
var outputDiv = document.querySelector("#output");   //output

var serverURL = "https://api.funtranslations.com/translate/minion.json"   //translation url



function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}



// defining error handler
function errorHandler(error) {
    console.log("Oops, an error occured", error);
    alert("Something is wrong with the server! Please try again after a while")
}


function clickHandler() {

    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
           })
        .catch(errorHandler)
};




btnTranslate.addEventListener("click", clickHandler)
