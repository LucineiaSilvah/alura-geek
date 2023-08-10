import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostraProdutos.js";
// BUSCA PRODUTO POR LETRA
 async function buscarProduto(evento){
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

  const busca = await conectaApi.buscaProduto(dadosDePesquisa); 
  
 
  const lista = document.querySelector('[data-lista]');


   while(lista.firstChild){
  
  lista.removeChild(lista.firstChild);
}
  
 busca.forEach(elemento => lista.appendChild(constroiCard(elemento.url, elemento.nome, elemento.preco, elemento.categoria)));

 if (busca.length == 0) {
    lista.innerHTML = `<h2>nao existem produtos com esse termo </h2>`
 }
}
//BUSCA PRODUTO POR CATEGORIA
async function buscarProdutoCategoria(evento){
  evento.preventDefault();
  const titulo = document.querySelector('[data-titulo]');
  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

  const busca = await conectaApi.buscaProdutoCategoria(dadosDePesquisa); 
  
  console.log(busca)
  const lista = document.querySelector('[data-lista]');


   while(lista.firstChild){
  lista.removeChild(lista.firstChild);
}

 busca.forEach(elemento => lista.appendChild(constroiCard(elemento.url, elemento.nome, elemento.preco, elemento.categoria)));
 titulo.innerHTML = `${dadosDePesquisa}`
 
 if (busca.length == 0) {
    lista.innerHTML = `<h2>nao existem produtos com esse termo </h2>`
 }
}
//BUSCA PRODUTOS COM CATEGORIA CONSOLE
async function buscarProdutoConsole(evento){
  evento.preventDefault();
  const titulo = document.querySelector('[data-titulo]');
  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

  const busca = await conectaApi.buscaProdutoCategoria('console'); 
  
  console.log(busca)
  const lista = document.querySelector('[data-lista]');


   while(lista.firstChild){
  lista.removeChild(lista.firstChild);
}

 busca.forEach(elemento => lista.appendChild(constroiCard(elemento.url, elemento.nome, elemento.preco, elemento.categoria)));
 titulo.innerHTML = 'Console'
 
 if (busca.length == 0) {
    lista.innerHTML = `<h2>nao existem produtos com esse termo </h2>`
 }
}
const btnConsoles = document.querySelector('[data-consoles]') ;
const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento));
botaoDePesquisa.addEventListener("click", evento => buscarProdutoCategoria(evento));
btnConsoles.addEventListener("click", evento => buscarProdutoConsole(evento));

