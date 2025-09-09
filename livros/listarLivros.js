function listarLivros(req, res,livros) {
    if (!livros || livros.length === 0) {
        return res.status(400).send("Nenhum livro cadastrado.");
    } 
    
    return res.status(200).send(`
        \n=== LIVROS SALVOS NO GERENCIADOR ===
        ${
            livros.map((livro, index) => {
                return (`
                    ${index + 1}. 
                    ID: ${livro.id}
                    Título: ${livro.titulo}
                    Autor: ${livro.autor}
                    Ano de Lançamento: ${livro.anoDeLancamento}
                    Gênero: ${livro.genero}
                    \n`)
            })
        }` 
    )
    
}
module.exports = listarLivros;