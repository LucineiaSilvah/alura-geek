async function listaProdutos(){
  const conexao = await fetch("https://64c1b75afa35860baea0c317.mockapi.io/produto");
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida; // vai ficar aqui o json convertido acima
}
  
async function criaProduto(id,url,nome,preco,categoria){// FUNCAO POST ADD ITEM NO JSON
  const conexao = await fetch("https://64c1b75afa35860baea0c317.mockapi.io/produto",{
    method: 'POST',// especifica o tipo de metodo
    headers:{ 'Content-type': 'application/json'//especifica o tipo do conteudo
  },
  body:JSON.stringify({
     id: id,
     url:url,
     nome:nome,
     preco:preco,
     categoria:categoria
     
  })
  });

  if(!conexao.ok){
    throw new Error('nao foi possivel adicionar produto');
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}


//funcao busca

async function buscaProduto(valor) {

  const conexao = await fetch(`https://64c1b75afa35860baea0c317.mockapi.io/produto?nome=${valor} `);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}
async function buscaProdutoCategoria(valor) {

  const conexao = await fetch(`https://64c1b75afa35860baea0c317.mockapi.io/produto?categoria=${valor} `);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}
async function buscaProdutoConsole(valor) {

  const conexao = await fetch(`https://64c1b75afa35860baea0c317.mockapi.io/produto?categoria=${valor} `);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}




export const conectaApi = {// exporta o conectaApi que é um obj com suas funções
   listaProdutos, // esta exportando apenas essa função
   criaProduto,
   buscaProduto,
   buscaProdutoCategoria,
   buscaProdutoConsole,
}
  

//filtrar 


