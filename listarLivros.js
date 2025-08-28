function listarLivros(menu, livros,prompt) {
    if (livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
    } else {
        console.log('\n=== LIVROS SALVOS NO GERENCIADOR ===');
        
        livros.forEach((livro, index) => {
            console.log(
                `\n${index + 1}. ID: ${livro.id}, Título: ${livro.titulo}, Autor: ${livro.autor}, Ano de Lançamento: ${livro.anoDeLancamento}, Gênero: ${livro.genero}`);
        });
    }
    console.log("\nPressione Enter para voltar ao menu principal...");
    prompt('');
    
    menu(livros,prompt);
}
module.exports = listarLivros;