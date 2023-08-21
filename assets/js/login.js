const form = document.querySelector('[data-formulario]');

const email = document.getElementById('email')
const senha = document.getElementById('senha')
const mensagem = document.querySelector('small')

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  checkInputs();
 if(isEmailValid(email.value) === true && senhaValidation(senha.value) === true){
 
   setTimeout(()=>{
    window.location.href ='index.html'
   },800)
 }

  

})


function checkInputs(){
  const emailValue = email.value.trim();
  const senhaValue = senha.value.trim();
  //const mensagemValue = mensagem.value.trim()
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
    errorValidation(mensagem, 'campo senha não pode estar vazio!')
  
  }else {
    //add class success
    successValidation(mensagem)

  
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
  let small = formControl.querySelector('small')
  small.innerText = mensagem;
  formControl.className = 'form-control error'

}
function successValidation(input){
  const formControl = input.parentElement;
 
  formControl.className = 'form-control success'


}
function isEmailValid(email) {
  const re = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);
  
return re.test(email);
}
function senhaValidation(senha){
  const senhaReg = new RegExp(/^[a-zA-Z0-9]+[!|@|#|$|%|^|&|*|(|)|-|_]$/)
  return senhaReg.test(senha)
}

    


