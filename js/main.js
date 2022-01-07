import { ValidaNome } from "./validar/validaNome.js";
import { ValidaCpf} from "./validar/validaCpf.js";
import { ValidaUsuario } from "./validar/validaUsuario.js";

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
    const nome = new ValidaNome();
    const cpf = new ValidaCpf();
    const user = new ValidaUsuario();

    console.log("Nome: " + nome.validaCaracters());
    console.log("CPF validado: " + cpf.validaCpf());
    console.log("Usuário validado: " + user.verificaCaracters());
  }
}

const valida = new ValidaFormulario();