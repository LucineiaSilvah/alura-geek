import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criarProduto(evento){
  evento.preventDefault();
 const id = document.querySelector('[data-id]').value;
  const url = document.querySelector('[data-url]').value;
  const nome = document.querySelector('[data-nome]').value;
  const preco = document.querySelector('[data-preco]').value;
  const categoria = document.querySelector('[data-categoria]').value;
 
 // const descricao = document.querySelector('[data-descricao]').value;

 try{
  await conectaApi.criaProduto(id,url,nome,preco,categoria);
  //redirecionar 
  alert('produto adicionado com sucesso!')
  window.location.href = "/index.html";
 } catch (e){
  alert(e)
 }
   
}   
formulario.addEventListener('submit', evento => criarProduto(evento));
