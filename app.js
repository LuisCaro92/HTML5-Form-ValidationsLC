//primera parte 
const card = document.getElementById("card");
const inputs = document.querySelectorall("#inputEmail4");

const expresiones = {

    card: /^[0-9\_\-]{4,16}$/,
    nombre: /^ [a - zA - ZA - ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,

}

const validarformulario = function (e) {
    switch (e.target.name) {
        case "tarjeta":
            if (expresiones.card.test(e.target.value)) {
                
            }

            else{
                document.getElementById("grupo_tarjeta").classList.add("grupo_card-incorrecto")

            }

            break;
        case "digitos ":
            break;
        case "amount1":
            break;
        case "nombre ":

            break;
        case "apellido":
            break;
        case "ciudad":

    }

}
inputs.forEach((input) => {
    input.addEventListener("keyup")
    input.addEventListener("blur")


});

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

})
