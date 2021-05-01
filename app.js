var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");

console.log(textInput)

btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked..!");
    console.log("input", textInput.value);
})