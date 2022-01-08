import { criaErro } from "./erro.js";
export class ValidaNome {
  constructor(){
    this.nome = document.querySelector("#nome");
    this.sobrenome = document.querySelector("#sobrenome");
  }

  validaCaracters(){
    let myRegex = /\d+/g; // Verifica se há números no nome
    let nomeCompleto = this.nome.value + ' ' + this.sobrenome.value;

    if(!myRegex.exec(nomeCompleto)){
      return true;
    } 
    
    criaErro(this.nome, 'Nome inválido');
    criaErro(this.sobrenome, 'Sobrenome inválido');
  }
}