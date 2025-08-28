function atualizarLivro(menu, livros,prompt) {
    if (livros.length === 0) {
        console.log('Nenhum livro cadastrado no gerenciador. Primeiro, adicione um livro para então poder editá-lo.');
        console.log('\nPressione Enter para voltar ao menu...');
        prompt();
        return menu(livros);
    }

    console.log('\n=== LIVROS SALVOS NO GERENCIADOR ===');
    livros.forEach((livro, index) => {
        console.log(
                `\n${index + 1}. ID: ${livro.id}, Título: ${livro.titulo}, Autor: ${livro.autor}, Ano de Lançamento: ${livro.anoDeLancamento}, Gênero: ${livro.genero}`);
});

    let id;
    let livroParaAtualizar;

    while (true) {
        id = prompt('Digite o número do ID do livro que deseja atualizar: ');
        const numericId = parseInt(id);

        if (isNaN(numericId)) {
            console.log("ID inválido. Por favor, digite um número.");
            continue;
        }
        livroParaAtualizar = livros.find(c => c.id === numericId);

        if (!livroParaAtualizar) {
            console.log(`Não foi encontrado um livro com o ID ${numericId}. Por favor, tente novamente.`);
        } else {
            break;
        }
    }

    const novoTitulo = prompt('Digite o novo título do livro: ');
    livroParaAtualizar.titulo = novoTitulo;
    
    const novoAutor = prompt('Digite o novo autor do livro: ');
    livroParaAtualizar.autor = novoAutor;

     let novoAnoDeLancamento;
    while (true) {
        novoAnoDeLancamento = prompt('Digite o novo ano de lançamento do livro: ');
        if (isNaN(parseInt(novoAnoDeLancamento)) || novoAnoDeLancamento.trim() === '') {
            console.log("Ano de Lançamento inválido. Por favor, digite apenas números.");
        } else {
            livroParaAtualizar.anoDeLancamento = novoAnoDeLancamento;
            break;
        }
    }

    console.log("Livro atualizado com sucesso!");

    const atualizarNovoLivro = prompt("Deseja atualizar outro livro? (s/n) ");
    if (atualizarNovoLivro.toLowerCase() === 's') {
        return atualizarLivro(menu, livros);
    } else {
        return menu(livros,prompt);
    }
}

module.exports = atualizarLivro;