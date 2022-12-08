//primera parte 
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {

    tarjeta: /^[0-9]{4,16}$/,
    numeros: /^[0-9]{2,4}$/,
    nombre: /^[a - zA - ZA]{1,20}$/,
    apellido: /^[a - zA - ZA]{1,20}$/,
    amount: /^[0-9]{3,15}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,

}
const campos = {
    tarjeta: false,
    numeros: false,
    nombre: false,
    apellido: false,
    amount: false,
    ciudad: false
}

const validarformulario = (e) => {

    switch (e.target.name) {
        case "tarjeta":
            validarCampo(expresiones.tarjeta, e.target, "tarjeta");
            break;

        case "digitos":
            validarCampo(expresiones.numeros, e.target, "digitos");

            break;

        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, "apellido");

            break;

        case "amount1":
            validarCampo(expresiones.amount, e.target, "amount1");

            break;
        case "ciudad":
            validarCampo(expresiones.numeros, e.target, "ciudad");

            break;
    }

}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove("grupo_card-incorrecto")
        document.getElementById(`grupo_${campo}`).classList.add("grupo_card-correcto")
        document.querySelector(`#grupo_${campo} i `).classList.add("fa-circle-check")
        document.querySelector(`#grupo_${campo} i `).classList.remove("fa-circle-xmark")
        document.querySelector(`#grupo_${campo} .formulario_error`).classList.remove("formulario_error-activo")
        campos[campos] = true;
    } else {
        console.log(campo)
        document.getElementById(`grupo_${campo}`).classList.add("grupo_card-incorrecto")
        document.getElementById(`grupo_${campo}`).classList.remove("grupo_card-correcto")
        document.querySelector(`#grupo_${campo} i `).classList.add("fa-circle-xmark")
        document.querySelector(`#grupo_${campo} i `).classList.remove("fa-circle-check")
        document.querySelector(`#grupo_${campo} .formulario_error`).classList.add("formulario_error-activo")
        campos[campos] = false;

    }
}


inputs.forEach((input) => {
    input.addEventListener("keyup", validarformulario);
    input.addEventListener("blur", validarformulario);



})


formulario.addEventListener("submit", (e) => {

    if (campos.tarjeta && campos.digitos && campos.nombre && campos.apellido && campos.amount && campos.ciudad) {
        formulario.reset();

        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
    }

    else {
        document.getElementById("alert").classList.add("alert-activo");

    }
})