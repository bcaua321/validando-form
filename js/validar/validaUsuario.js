export class ValidaUsuario {
  constructor(){
    this.usuario = document.querySelector("#user");
  }

  verificaCaracters (){
    let caracters = this.usuario.value;

    if(caracters.length < 3 || caracters.length > 12){
      return false;
    } 

    let myRegex = /[^a-zA-Z0-9]+/g; // Procura qualquer caracter Especial

    if(!myRegex.exec(caracters)){
      return true;
    }

    return false;
  }
}