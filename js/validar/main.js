import { ValidaNome } from "./validaNome.js";
import { ValidaCpf} from "./validaCpf.js";

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
    console.log(cpf.validaCpf());
  }
}

const valida = new ValidaFormulario();