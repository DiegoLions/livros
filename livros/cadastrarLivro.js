function cadastrarLivro(menu, livros, prompt) {
    const titulo = prompt('Título do Livro: ');
    const autor = prompt('Autor do Livro: ');
    let anoDeLancamento;
    while (true) {
        anoDeLancamento = prompt('Ano de Lançamento: ');
        if (isNaN(anoDeLancamento) || anoDeLancamento.trim() === '') {
            console.log("Ano de Lançamento inválido. Por favor, digite apenas números.");
        } else {
            break;
        }
    }

const genero = prompt('Gênero do Livro: ');

    let id;
    let numericId;
    while (true) {
        id = prompt('Digite um número para o ID do livro: ');
        numericId = parseInt(id);
        if (isNaN(numericId)) {
            console.log("ID inválido. Por favor, digite um número.");
        } else if (livros.some(t => t.id === numericId)) {
            console.log(`Já existe um livro com o ID ${numericId}. Por favor, escolha outro ID.`);
        } else {
            break;
        }
    }
    const novoLivro = {
        titulo: titulo,
        autor: autor,
        anoDeLancamento: anoDeLancamento,
        genero : genero,
        id: numericId,
    };
    livros.push(novoLivro);
    console.log('Livro cadastrado com sucesso!');

    const cadastrarNovoLivro = prompt("Deseja cadastrar um novo livro? (s/n) ");
    if (cadastrarNovoLivro.toLowerCase() === 's') {
        return cadastrarLivro(menu, livros);
    } else {
        menu(livros,prompt);
    }
}
module.exports = cadastrarLivro;