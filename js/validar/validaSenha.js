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

    return criaErro(this.senha, "As senhas devem conter [6 a 12] caracteres.");
  }
}