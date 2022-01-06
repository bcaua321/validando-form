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
    const name = document.querySelector('#nome');
    const pass = document.querySelector('#senha');
    const passConfirm = document.querySelector('#senha-confirm');

    if(pass.value !== passConfirm.value){
      console.log('As senhas não coicidem');
    }
    else {
      console.log('As senhas coicidem');
    }
  }

}

const valida = new ValidaFormulario();