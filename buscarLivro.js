function buscarLivro(menu, livros, prompt) {
    if (livros.length === 0) {
        console.log('Nenhum livro cadastrado.');
        console.log('\nPressione Enter para retornar ao menu...');
        prompt();
        return menu(livros,prompt);
    }

    console.log('\n=== LIVROS DISPONÍVEIS PARA CONSULTA ===');
    livros.forEach((livro, index) => {
            `\n${index + 1}. ID: ${livro.id}, Título: ${livro.titulo}, Autor: ${livro.autor}, Ano de Lançamento: ${livro.anoDeLancamento}, Gênero: ${livro.genero}`});

    const tituloLivroBusca = prompt('\nDigite o título do livro para buscá-lo: ');
    if (tituloLivroBusca.trim() === '') {
        console.log('O título não pode ser vazio.');
        console.log('\nPressione Enter para retornar ao menu...');
        prompt('');
        return menu(livros,prompt);
    }

    const filtrarLivro = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(tituloLivroBusca.toLowerCase())
    );

    if (filtrarLivro.length === 0) {
        console.log(`Nenhum livro encontrado com este título "${tituloLivroBusca}".`);
    } else {
        console.log(`\n--- LIVRO COM O TÍTULO DE "${tituloLivroBusca}" ---`);
        filtrarLivro.forEach(livro => {
            console.log(`ID: ${livro.id}`);
            console.log(`Título: ${livro.titulo}`);
            console.log(`Autor: ${livro.autor}`);
            console.log(`Ano de Lançamento: ${livro.anoDeLancamento}`)
            console.log(`Gênero: ${livro.genero}`);
            console.log("-------------------------");
        });
    }

    console.log('\nPressione Enter para retornar ao menu...');
    prompt('');
    menu(livros,prompt);
};

module.exports = buscarLivro;