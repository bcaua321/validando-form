import { ValidaCpf } from "./validar/validaCpf.js";
import { ValidaUsuario } from "./validar/validaUsuario.js";
import { ValidaSenha } from "./validar/validaSenha.js";
import { criaErro } from "./validar/criaErro.js";

// Nome precisa conter somente letras
// Validar o CPF
// usuario deve conter somente letras e numeros. -> mínimo de 3 - 12 caracters
// senha precisa ter entre 6- 12 caracters

class ValidaFormulario{
  constructor(){
    this.formulario = document.getElementById('form');
    this.eventos();
  }

  eventos(){
    this.formulario.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e){
    e.preventDefault();
  
    const campos = this.validaCampos();
    const senhas = this.validaSenhas();
    
    if(campos && senhas){
      this.formulario.submit();
    }
  }
  
  verificaInputsVazios(){
    for (let campo of this.formulario.querySelectorAll('.dados')){
      if(!campo.value){
        criaErro(campo, `O campo ${campo.placeholder} está vazio`);
      } 
    }
  }
  
  validaCampos(){
    this.removeErros();
    this.verificaInputsVazios();
    const cpf = new ValidaCpf();
    const user = new ValidaUsuario();
    
    return cpf.validaCpf() && user.verificaCaracters();
  }
  
  
  validaSenhas(){
    const senha = new ValidaSenha();
    return senha.validaSenha();
  }

  removeErros(){
    for (let erroText of this.formulario.querySelectorAll('.erro-text')){
      erroText.remove();
    }
  }
}

const valida = new ValidaFormulario();