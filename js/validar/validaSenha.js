import { criaErro } from "./criaErro.js";
export class ValidaSenha {
  constructor (){
    this.senha = document.querySelector("#senha");
    this.senhaConfirm = document.querySelector("#senha-confirm");
  }

  validaSenha(){
    if(!this.senha) return;

    if(this.senha.value !== this.senhaConfirm.value) {
      return criaErro(this.senha, "As senhas não correspondem")
    }

    if(this.senha.value.length < 6 || this.senha.value.length > 12){
      return criaErro(this.senha, "As senhas devem conter [6 a 12] caracteres.");
    }

    return true;
  }
}