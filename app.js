const livros = require('./database-livros')
const categorias = require('./database-categorias')

const readline = require('readline-sync')

//pegar um imput se quer escolher por categoria 
const entradaInicial = readline.question('Deseja buscar um livro pela categoria? S/N')


if(entradaInicial.toLocaleUpperCase() === 'S'){//se sim, mostra as categorias disponiveis, e pergunta qual categoria
    console.log('Essas são as categorias disponíveis:')
    categorias.forEach(categoria => {
        console.log('N°: '+categoria.id+' - '+categoria.categoria)
    });
    const entradaCategoria = readline.question('Qual categoria voce deseja? Digite o numero correspondente:')
    const retorno = livros.filter(livro => livro.categoria_id == entradaCategoria)
    console.table(retorno)

}else{//se não, mostra todos os livros em ordem crescente pela qtde de páginas
    console.log('Esses são todos os livros disponíveis:')
    const livrosOrdenados = livros.sort((a,b)=>a.paginas - b.paginas)
    console.table(livrosOrdenados)
}