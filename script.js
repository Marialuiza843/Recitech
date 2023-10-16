document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("success-message");
    form.addEventListener("submit", function (event) {
        let valid = true;

        if (nameInput.value.trim() === "") {
            document.getElementById("name-error").textContent = "Campo obrigatório";
            valid = false;
        } else {
            document.getElementById("name-error").textContent = "";
        }

        if (emailInput.value.trim() === "") {
            document.getElementById("email-error").textContent = "Campo obrigatório";
            valid = false;
        } else {
            document.getElementById("email-error").textContent = "";
        }

        if (messageInput.value.trim() === "") {
            document.getElementById("message-error").textContent = "Campo obrigatório";
            valid = false;
        } else {
            document.getElementById("message-error").textContent = "";
        }

        if (valid) {
            successMessage.textContent = "Mensagem enviada com sucesso!";
        } else {
            successMessage.textContent = "";
            event.preventDefault();
        }
    });
});

const enviarBotao = document.getElementById("enviarBotao");
const meuFormulario = document.getElementById("meuFormulario");

enviarBotao.addEventListener ("click"(), Function()) 

    alert("Sua mensagem foi enviada com sucesso! Entraremos em contato em breve!");

    meuFormulario.reset();
