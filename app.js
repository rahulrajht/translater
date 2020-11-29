var btnTranslate = document.querySelector("#translate-button")
var clearText = document.querySelector("#clear-button")
var txtInput = document.querySelector("#translate-input")
var txtOutput = document.querySelector("#translate-output")

var url = "https://api.funtranslations.com/translate/minion.json"
btnTranslate.addEventListener("click", btnClickHandler)

function btnClickHandler(){
    var input = txtInput.value
    var finalUrl = constructUrl(input)
    console.log(finalUrl)
    fetch(finalUrl).then(response => response.json()).then(json => {
        txtOutput.innerText = json.contents.translated
    }).catch(() => alert("some error occured"))
}

function constructUrl(input){
    var convertedUrl = url +"?" +"text=" +input 
    return convertedUrl
}

clearText.addEventListener("click" , clear)
function clear(){
    console.log("clear")
    txtInput.value = null
    txtOutput.innerText =  null
}