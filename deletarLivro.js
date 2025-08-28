function deletarLivro(menu, livros,prompt) {
    if (livros.length === 0) {
        console.log('Nenhum livro cadastrado no gerenciador. Primeiro, cadastre um livro para então poder deletá-lo.');
        console.log('\nPressione Enter para voltar ao menu...');
        prompt();
        return menu(livros);
    }
  
    console.log('\n=== LIVROS DISPONÍVEIS PARA DELEÇÃO ===');
    livros.forEach((livro, index) => {
        console.log(
                `\n${index + 1}. ID: ${livro.id}, Título: ${livro.titulo}, Autor: ${livro.autor}, Ano de Lançamento: ${livro.anoDeLancamento}, Gênero: ${livro.genero}`);
    });

    let id;
    let indexParaDeletar;

    while (true) {
        id = prompt('Digite o número do ID do livro que deseja deletar: ');
        const numericId = parseInt(id);

        if (isNaN(numericId)) {
            console.log("ID inválido. Por favor, digite um número.");
            continue;
        }
        
        indexParaDeletar = livros.findIndex(c => c.id === numericId);

        if (indexParaDeletar === -1) {
            console.log(`Não foi encontrado um livro com o ID ${numericId}. Por favor, tente novamente.`);
        } else {
            break;
        }
    }

    livros.splice(indexParaDeletar, 1);

    console.log("Livro deletado com sucesso!");

    const deletarNovoLivro = prompt("Deseja deletar outro livro? (s/n) ");
    if (deletarNovoLivro.toLowerCase() === 's') {
        return deletarLivro(menu, livros);
    } else {
        return menu(livros,prompt);
    }
}

module.exports = deletarLivro;
