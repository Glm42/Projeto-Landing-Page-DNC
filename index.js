var RightArrow = window.document.getElementById("rightArrow")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var LeftArrow = window.document.getElementById("leftArrow")

function ScrollRight () {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    Samantha.style = "display:flex; margin-left:0.125rem"
    RightArrow.style = "display:none"
    LeftArrow.style = "display:flex; margin-top:3.438rem"
}

function ScrollLeft() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    RightArrow.style = "display:flex"
    LeftArrow.style = "display:none"
}