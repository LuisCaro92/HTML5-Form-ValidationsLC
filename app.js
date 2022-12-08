//primera parte 
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {

    tarjeta: /^[0-9]{4,16}$/,
    numeros: /^[0-9]{2,4}$/,
    nombre: /^[a-zA-ZA]{1,20}$/,
    apellido: /^[a-zA-ZA]{1,20}$/,
    amount1: /^[0-9]{3,15}$/,
    ciudad: /^[a-zA-Z]{1,20}$/,
    codigo: /^[0-9]{4,16}$/,
}
const campos = {
    tarjeta: false,
    numeros: false,
    nombre: false,
    apellido: false,
    amount1: false,
    ciudad: false,
    codigo:false
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
            validarCampo(expresiones.amount1, e.target, "amount1");

            break;
        case "ciudad":
            validarCampo(expresiones.ciudad, e.target, "ciudad");

            break;

            case "codigo":
            validarCampo(expresiones.codigo, e.target, "codigo");

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
e.preventDefault();
    if (campos.tarjeta && campos.digitos && campos.nombre && campos.apellido && campos.amount1 && campos.ciudad && campos.codigo) {
        formulario.reset();

        
      
    }

    else {
        document.getElementById("alert").classList.add("alert-activo");
        document.getElementById("red").classList.add("red-activo");

    }
})