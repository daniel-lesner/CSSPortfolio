const changeVisibility = () => {
    document.getElementById('textArea').style.visibility == "visible"
        ?  document.getElementById('textArea').style.visibility = "hidden"
        : document.getElementById('textArea').style.visibility = "visible"
}

const deleteText = () => {
    document.getElementById('firstInput').value = ""
}