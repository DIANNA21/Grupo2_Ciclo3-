

function validarDatos(){

    let nombre = document.getElementById("in_nombre_usuario").value;
    let Contra = document.getElementById("in_contrasena").value;
    let ConfContra = document.getElementById("in_confirmar_contrasena").value;
    
    validar_nombre_usuario(nombre) ? alert("El nombre es correcto") : alert("El nombre es incorrecto")
    confirmar_contrasena(Contra,ConfContra)? alert("contraseña correcta ") : alert("contraseña incorrecta")
}




function validar_nombre_usuario(params){
  const patron =/^[A-Z]+$/i;
  let validator;

  if(params == ""){

   validator=false
  }else{
    if( params.length<6 ||params.length>30){
         validator=false;
      }else{
        if(!patron.test(params)){
           validator=false
        }else{
           validator=true;
    }
  }
}
return validator
}

function validar_contrasena(params){
  const patron =/^[a-zA-Z0-9]+$/i
  let validator2;

  if(params == ""){
    alert("contraseña no puede estar vacia ")
    validator2=false
  }else{
    if(params.length<6){
      validator2=false;
    }else{
      if(!patron.test(params)){
        validator2=false;
      }else{
        validator2=true;
      }
    }
  }
return validator2

}

function confirmar_contrasena(param1, param2) {
  let isValid;
  validar_contrasena(param1) && validar_contrasena(param2) && param1 == param2 ? isValid = true : isValid = false;
  return isValid
}

  
module.exports.validar_nombre_usuario=validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.confirmar_contrasena = confirmar_contrasena;