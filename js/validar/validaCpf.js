export class ValidaCpf{
  constructor(){
    this.cpf = document.querySelector("#cpf");
  }

  validaCpf(){
    let a = this.cpf.value;
    let cpfString = a.replace(/(\D)+/g, '')
    let cpfLimpo = Array.from(cpfString);

    if(this.verificaCpf(cpfLimpo)){
      return this.validaPrimeiroDigito(cpfLimpo) && this.validaSegundoDigito(cpfLimpo);
    }

    return false;
  }
  
  // CPF do tipo 111.111.111-11 vai passar no algoritmo, mas não existe.
  verificaCpf(cpfArray){
    let digito = cpfArray[0];
    let cpf = cpfArray.join('');
    let cpfDigitoRepetido = digito.repeat(11);

    if(cpf === cpfDigitoRepetido){
      return false;
    }

    return true;
  }

  // 0*10 + 4*9 + 8*8 + 4*7 + 3*6 + 1*5 + 4*4 + 3*3 + 2*2
  validaPrimeiroDigito(cpfArray){
    let j = 10, acc = 0, result;
    

    for(let i = 0; i < cpfArray.length - 2; i++){
      acc += Number(cpfArray[i])*j;
      j--;
    }

    result = (acc * 10) % 11;

    result === 10 ? result = 0: result;

    if(result === Number(cpfArray[9])){
      return true;
    }

    return false;
  }


  validaSegundoDigito(cpfArray){
    let j = 11, acc = 0, result;

    for(let i = 0; i < cpfArray.length - 1; i++){
      acc += Number(cpfArray[i])*j;
      j--;
    }

    result = (acc * 10) % 11;
    result === 10 ? result = 0: result;

    if(result === Number(cpfArray[10])){
      return true;
    }

    return false;
  }
}