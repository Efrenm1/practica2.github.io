function validar_clave() {
    var contraseña1, contraseña2;
    contraseña1 =document.getElementById("contraseña1").value;
    contraseña2 =document.getElementById("contraseña2").value;
    
    if(contraseña1 !== contraseña2){
        alert("Las contraseñas no coinciden");
        return false;
      }
    }