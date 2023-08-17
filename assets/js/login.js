const form = document.querySelector('[data-formulario]');

const email = document.getElementById('email')
const senha = document.getElementById('senha')
const mensagemUser = document.getElementById('mensagem')

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  ;
checkInputs()
 setTimeout(()=>{
  window.location.href ='/index.html'
 },800)
  

})


function checkInputs(){
  const emailValue = email.value.trim();
  const senhaValue = senha.value.trim();
  const mensagemUserValue = mensagemUser.value.trim()
  if(emailValue === ''){
    //mostrar erro
    errorValidation(email, 'campo email não pode estar vazio!')
    //add class error
  }else if(!isEmailValid(emailValue)){
    errorValidation(email, 'por favor digite um email valido!. Ex: seunome@dominio.com')
  }
  else{
    //add class success
    successValidation(email)
   
    
  } 

  if (senhaValue === '') {
    errorValidation(mensagemUser, 'campo senha não pode estar vazio!')
  
  }else if(mensagemUserValue.length < 50){
    errorValidation(senha, 'texto muito pequeno!')
  }
  else {
    //add class success
    successValidation(mensagemUser)

  
  }
  
  if (senhaValue === '') {
    errorValidation(senha, 'campo senha não pode estar vazio!')
  
  }else if(!senhaValidation(senhaValue)){
    errorValidation(senha, 'senha deve conter no minimo 6 digitos e um carecter especial!')
  }
  else {
    //add class success
    successValidation(senha)

  
  }
  
 

}

function errorValidation(input,mensagem ){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')
  small.innerText = mensagem;
  formControl.className = 'form-control error'

}
function successValidation(input){
  const formControl = input.parentElement;
 
  formControl.className = 'form-control success'


}
function isEmailValid(email) {
  const re = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);
  

  if (re.test(email)) {
     return true;
  }
  return false;
}
function senhaValidation(senha){
  const senhaReg = new RegExp(/^[a-zA-Z0-9]+[!|@|#|$|%|^|&|*|(|)|-|_]$/)
  if(senhaReg.test(senha) ){
    //senha valida
    return true
  }
  //senha invalida
  return false
}

    


