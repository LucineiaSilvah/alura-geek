
function logarUser(){
  
  if(email.value == 'user@user' && senha.value == 'user#1234'){
    alert('dados validados com sucesso..')
    location.href = '/index.html'
    email.value = '';
    senha.value = '';
  }
  
  
  
  
  
}   

let email = document.getElementById('email');
let senha =  document.getElementById('senha');
const botaoEntrar = document.querySelector('[data-entrar]');
botaoEntrar.addEventListener('click', logarUser);

