const cadastrarLivro = require('./cadastrarLivro');
const listarLivros = require('./listarLivros');
const atualizarLivro = require('./atualizarLivro');
const buscarLivro = require('./buscarLivro');
const deletarLivro = require('./deletarLivro');

function menu(livros, prompt){

console.log(`
    \n<<<GERENCIADOR DE LIVROS>>>
1. Cadastrar Livro
2. Listar Livros
3. Atualizar Livro
4. Buscar Livro
5. Deletar Livro
6. Sair do Gerenciador de Livros
`);
const opcao = prompt('Escolha uma opção: ');
switch (opcao) {
case '1':
cadastrarLivro(menu, livros, prompt);
menu()
break;
case '2':
listarLivros(menu, livros,prompt);
break;
case '3':
atualizarLivro(menu, livros,prompt);
break;
case '4':
buscarLivro(menu, livros,prompt);
break;
case '5':
deletarLivro(menu, livros,prompt);
break;
case '6':
console.log('Saindo do Gerenciador de Livros. Obrigado por utilizá-lo! Até logo!');
return; 
default:
console.log('Opção inválida!');
}}

module.exports = menu;