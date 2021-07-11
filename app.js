const livros = require('./database-livros')
const categorias = require('./database-categorias')

//pegar um imput se quer escolher por categoria 
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro pela categoria? S/N')

//se for sim, mostra as categorias disponiveis, e pergunta qual categoria

//se não, mostra todos os livros em ordem crescente pela qtde de páginas

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    categorias.forEach(categoria => {
        console.log('N°: '+categoria.id+' - '+categoria.categoria)
    });
    const entradaCategoria = readline.question('Qual categoria voce deseja? Digite o numero correspondente:')
    console.log(entradaCategoria)
    const retorno = livros.filter(livro => livro.categoria_id == entradaCategoria)
    console.table(retorno)

}else{
    console.log('Esses são todos os livros disponíveis:')
    const livrosOrdenados = livros.sort((a,b)=>a.paginas - b.paginas)
    console.table(livrosOrdenados)
}