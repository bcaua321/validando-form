export class ValidaSenha {
  constructor (){
    this.senha = document.querySelector("#senha");
    this.senhaConfirm = document.querySelector("#senha-confirm");
  }

  validaSenha(){
    if(this.senha.value < 6 || this.senha.value > 12){
      return false;
    }

    if(this.senha.value === this.senhaConfirm.value){
      return true;
    }

    return false;
  }
}