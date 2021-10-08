
let nombre;
let contrasena1;
let contrasena2;
let pattern2 = new RegExp ('^[a-zA-Z0-9]+$', 'i');

function botonGuardar () {

    console.log ("Ingresar")

    nombre =  document.getElementById('in_nombre_usuario').value;
    contrasena1 = document.getElementById('in_contrasena').value;
    contrasena2 = document.getElementById('in_confirmar_contrasena').value;
    validar_nombre_usuario (nombre);
    validar_contrasena(contrasena1);
    confirmar_contrasena (contrasena1,contrasena2);
    
}

function validar_nombre_usuario (nombre) {

    let pattern1 = new RegExp ('^[A-Z]+$', 'i'); 
     
    if (nombre.length  === " " || (nombre.length < 6 || nombre.length > 30)){
        alert("Debes ingresar tu nombre");
        return false
    }
        else {

        if (!pattern1.test(nombre)) {
            alert("Tu nombre debe contener solo letras de la A-Z (mayusculas o minusculas)");
            return false
        }
        else {
            alert("Nombre validado correctamente");
            return true
        }
    }
 }
function validar_contrasena(contrasena1) { 

    
        if (contrasena1.length == " "  || contrasena1.length < 6){
        alert ("Debes ingresar una contraseña valida");
        return false
    }
    else {

        if (!pattern2.test(contrasena1)) {
            alert("Tu contraseña debe contener caracteres alfanumericos)");
            return false
        }
        else {
            alert("Contraseña valida");
            return true
        }  
    }
}

function confirmar_contrasena (contrasena1, contrasena2) {
       
    if (contrasena2 != contrasena1) {
        alert ("La contraseña no coincide");
        return false;
    }

    else {

        if (pattern2.test(contrasena1) === pattern2.test(contrasena2)) {
            alert("Contraseñas validadas correctamente");
            return true

        }
        //else {
            //alert ("Contraseñas validadas correctamente")
        //}

    }
    //else {
       // if (pattern2.test(contrasena2) === pattern2.test(contrasena1) ) {
            //alert ("La contraseña confirmada debe contener caracteres alfanumericos");
            //eturn false;

       // }
        //else {
          //  alert("Contraseñas validadas correctamente");
           // return true
        //}
    }
       


module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena =validar_contrasena;
module.exports.confirmar_contrasena= confirmar_contrasena;
