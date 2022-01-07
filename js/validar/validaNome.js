export class ValidaNome {
  constructor(){
    this.nome = document.querySelector("#nome");
    this.sobrenome = document.querySelector("#sobrenome");
  }

  validaCaracters(){
    let myRegex = /\d+/g;
    let nomeCompleto = this.nome.value + ' ' + this.sobrenome.value;

    if(!myRegex.exec(nomeCompleto)){
      return true;
    } 
    
    return false;
  }
}