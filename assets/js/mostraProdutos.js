import { conectaApi } from "./conectaApi.js"; // puxou a funcao do conecta api


const lista = document.querySelector('[data-lista]');

export default function constroiCard(id,url,nome,preco,categoria){
  const produto = document.createElement('li');// criou uma lista
  produto.className = 'produto__item';// deu uma classe ao item li criado
  produto.innerHTML = `
  <span id="product">
           
           <img src="${url}" alt="">
       
           <span class="icons">
             <i class="fa-solid fa-trash btn-delete"></i>
             
             <i class="fa-solid fa-pen btn-edit"></i>
           
             <span data-id >${id}</span>
           </span>
          </span>
           <span class="produto__nome">${nome}</span>
           <span class="produto__preco">${preco}</span>
           <span class="produto__categoria">${categoria}</span>
           <span class="produto__link">
             <a href="#" target="_blank" rel="noopener noreferrer">ver produto</a>
           </span>
           
  
  `
   return produto; // esta retornando o produto criado
   
}


//criar outra funcao para consumir a funcao do conecta api

async function listaProdutos(){
  try{
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.id,elemento.url, elemento.nome, elemento.preco, elemento.categoria)))//para cada item da listaApi lista da ul(pai) ganha um li(filho)
    
 

  }catch{
    lista.innerHTML = `<h2> Nao foi possivel carregar os produtos</h2>`
  }

}

listaProdutos();


lista.addEventListener('click', function (evento){
 

  let elementoClicado = evento.target;
  if(elementoClicado.classList.contains('btn-delete')){
    let btn = elementoClicado.parentElement;
    let img = btn.parentNode;
    let itens = img.parentNode;
 

    let itensId = itens.querySelector('#product')
    let id = itensId.textContent;
    id = parseInt(id)
    itens.remove(id);
    deletarProduto(id)
   

    return  id;
  }
  
async function deletarProduto(id) {
  const conexao = await fetch(`https://64c1b75afa35860baea0c317.mockapi.io/produto/${id}`,
  {
    method: 'DELETE'// especifica o tipo de metodo
    
  })
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
  
}

}

)
//editar







