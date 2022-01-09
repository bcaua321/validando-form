export function criaErro(campo, msg){
  const div = document.createElement('div');
  div.innerHTML = msg;
  div.classList.add('erro-text');
  campo.insertAdjacentElement('afterend', div);
}