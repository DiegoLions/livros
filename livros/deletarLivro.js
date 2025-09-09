function deletarLivro(req, res, livros) {
    if (livros.length === 0) {
        return res.status(400).send('Nenhum livro cadastrado no gerenciador. Primeiro, cadastre um livro para então poder deletá-lo.');
    }
  
    const {id} = req.params;

  
        if (isNaN(parseInt(id))) {
            return res.status(400).send("ID inválido. Por favor, digite um número.");
        }
        
const indexParaDeletar = livros.findIndex (livro => livro.id===parseInt(id))


        if (indexParaDeletar === -1) {
            return res.status(400).send(`Não foi encontrado um livro com o ID ${id}. Por favor, tente novamente.`);
        }

    livros.splice(indexParaDeletar, 1);

    return res.send("Livro deletado com sucesso!");

}

module.exports = deletarLivro;
