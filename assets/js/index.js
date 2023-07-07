if(localStorage.getItem('token') == null){
  alert('precisar estar logado');
  window.location.href= "./assets/html/signIn.html";
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#logado');

logado.innerHTML = 'Olá ' + userLogado.nome;

function sair(){
  localStorage.removeItem('token');
  localStorage.removeItem('userLogado');
  window.location.href= "./assets/html/signIn.html";
}