const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")
const buttonSenha = document.querySelector(".eye-password")
const imgEmail = document.querySelector(".img-email")
const imgPassword = document.querySelector(".img-password")

document.body.onload = mudaIcon(imgEmail, "./assets/mail-focus.svg")
inputEmail.addEventListener("focus", () => mudaIcon(imgEmail, "./assets/mail-focus.svg"))
inputEmail.addEventListener('focusout', () => mudaIcon(imgEmail, "./assets/mail.svg"));
inputPassword.addEventListener("focus", () => mudaIcon(imgPassword, "./assets/lock-focus.svg"))
inputPassword.addEventListener("focusout", () => mudaIcon(imgPassword, "./assets/lock.svg"))
buttonSenha.addEventListener("click", mostrarEOcultarSenha)

function mostrarEOcultarSenha() {
    if(inputPassword.type === "password") {
        buttonSenha.setAttribute("src", "./assets/eye-off.svg")
        inputPassword.type = "text"   
    } else {
        buttonSenha.setAttribute("src", "./assets/eye-on.svg")
        inputPassword.type = "password"
    }
}

function mudaIcon(imagem, url) {
    imagem.setAttribute("src", url)
}