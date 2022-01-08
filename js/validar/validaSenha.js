import { criaErro } from "./erro.js";
export class ValidaSenha {
  constructor (){
    this.senha = document.querySelector("#senha");
    this.senhaConfirm = document.querySelector("#senha-confirm");
  }

  validaSenha(){
    if(this.senha.value < 6 || this.senha.value > 12){
      return criaErro(this.senha, 'Senha deve conter entre [6, 12] caracteres');
    }

    if(this.senha.value === this.senhaConfirm.value){
      return true;
    }

    return criaErro(this.senha, 'Senhas Inválidas');
  }
}